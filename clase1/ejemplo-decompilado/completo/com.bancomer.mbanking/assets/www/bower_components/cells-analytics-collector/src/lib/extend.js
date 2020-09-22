/*
	Tree Kit

	Copyright (c) 2014 - 2016 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/ /*
	== Extend function ==
*/ /*
	options:
		* own: only copy own properties that are enumerable
		* nonEnum: copy non-enumerable properties as well, works only with own:true
		* descriptor: preserve property's descriptor
		* deep: perform a deep (recursive) extend
		* maxDepth: used in conjunction with deep, when max depth is reached an exception is raised, default to 100 when
			the 'circular' option is off, or default to null if 'circular' is on
		* circular: circular references reconnection
		* move: move properties to target (delete properties from the sources)
		* preserve: existing properties in the target object are not overwritten
		* nofunc: skip functions
		* deepFunc: in conjunction with 'deep', this will process sources functions like objects rather than
			copying/referencing them directly into the source, thus, the result will not be a function, it forces 'deep'
		* proto: try to clone objects with the right prototype, using Object.create() or mutating it with Object.setPrototypeOf(),
			it forces option 'own'.
		* inherit: rather than mutating target prototype for source prototype like the 'proto' option does, here it is
			the source itself that IS the prototype for the target. Force option 'own' and disable 'proto'.
		* skipRoot: the prototype of the target root object is NOT mutated only if this option is set.
		* flat: extend into the target top-level only, compose name with the path of the source, force 'deep',
			disable 'unflat', 'proto', 'inherit'
		* unflat: assume sources are in the 'flat' format, expand all properties deeply into the target, disable 'flat'
		* deepFilter
			* blacklist: list of black-listed prototype: the recursiveness of the 'deep' option will be disabled
				for object whose prototype is listed
			* whitelist: the opposite of blacklist
*/export default function extend(options,target){//console.log( "\nextend():\n" , arguments ) ;
var i,source,newTarget=!1,length=arguments.length;if(3>length){return target}var sources=Array.prototype.slice.call(arguments,2);length=sources.length;if(!options||"object"!==babelHelpers.typeof(options)){options={}}var runtime={depth:0,prefix:""};if(!options.maxDepth&&options.deep&&!options.circular){options.maxDepth=100}if(options.deepFunc){options.deep=!0}if(options.deepFilter&&"object"===babelHelpers.typeof(options.deepFilter)){if(options.deepFilter.whitelist&&(!Array.isArray(options.deepFilter.whitelist)||!options.deepFilter.whitelist.length)){delete options.deepFilter.whitelist}if(options.deepFilter.blacklist&&(!Array.isArray(options.deepFilter.blacklist)||!options.deepFilter.blacklist.length)){delete options.deepFilter.blacklist}if(!options.deepFilter.whitelist&&!options.deepFilter.blacklist){delete options.deepFilter}}// 'flat' option force 'deep'
if(options.flat){options.deep=!0;options.proto=!1;options.inherit=!1;options.unflat=!1;if("string"!==typeof options.flat){options.flat="."}}if(options.unflat){options.deep=!1;options.proto=!1;options.inherit=!1;options.flat=!1;if("string"!==typeof options.unflat){options.unflat="."}}// If the prototype is applied, only owned properties should be copied
if(options.inherit){options.own=!0;options.proto=!1}else if(options.proto){options.own=!0}if(!target||"object"!==babelHelpers.typeof(target)&&"function"!==typeof target){newTarget=!0}if(!options.skipRoot&&(options.inherit||options.proto)){for(i=length-1;0<=i;i--){source=sources[i];if(source&&("object"===babelHelpers.typeof(source)||"function"===typeof source)){if(options.inherit){if(newTarget){target=Object.create(source)}else{Object.setPrototypeOf(target,source)}}else if(options.proto){if(newTarget){target=Object.create(Object.getPrototypeOf(source))}else{Object.setPrototypeOf(target,Object.getPrototypeOf(source))}}break}}}else if(newTarget){target={}}runtime.references={sources:[],targets:[]};for(i=0;i<length;i++){source=sources[i];if(!source||"object"!==babelHelpers.typeof(source)&&"function"!==typeof source){continue}extendOne(runtime,options,target,source)}return target}function extendOne(runtime,options,target,source){//console.log( "\nextendOne():\n" , arguments ) ;
//process.exit() ;
var j,jmax,sourceKeys,sourceKey,sourceValue,sourceValueProto,value,sourceDescriptor,targetKey,targetPointer,path,indexOfSource=-1;// Max depth check
if(options.maxDepth&&runtime.depth>options.maxDepth){throw new Error("[tree] extend(): max depth reached("+options.maxDepth+")")}if(options.circular){runtime.references.sources.push(source);runtime.references.targets.push(target)}if(options.own){if(options.nonEnum){sourceKeys=Object.getOwnPropertyNames(source)}else{sourceKeys=Object.keys(source)}}else{sourceKeys=source}for(sourceKey in sourceKeys){if(options.own){sourceKey=sourceKeys[sourceKey]}// If descriptor is on, get it now
if(options.descriptor){sourceDescriptor=Object.getOwnPropertyDescriptor(source,sourceKey);sourceValue=sourceDescriptor.value}else{// We have to trigger an eventual getter only once
sourceValue=source[sourceKey]}targetPointer=target;targetKey=runtime.prefix+sourceKey;// Do not copy if property is a function and we don't want them
if(options.nofunc&&"function"===typeof sourceValue){continue}// 'unflat' mode computing
if(options.unflat&&0===runtime.depth){path=sourceKey.split(options.unflat);jmax=path.length-1;if(jmax){for(j=0;j<jmax;j++){if(!targetPointer[path[j]]||"object"!==babelHelpers.typeof(targetPointer[path[j]])&&"function"!==typeof targetPointer[path[j]]){targetPointer[path[j]]={}}targetPointer=targetPointer[path[j]]}targetKey=runtime.prefix+path[jmax]}}if(options.deep&&sourceValue&&("object"===babelHelpers.typeof(sourceValue)||options.deepFunc&&"function"===typeof sourceValue)&&(!options.descriptor||!sourceDescriptor.get)&&(// not a condition we just cache sourceValueProto now
(sourceValueProto=Object.getPrototypeOf(sourceValue))||!0)&&(!options.deepFilter||(!options.deepFilter.whitelist||-1!==options.deepFilter.whitelist.indexOf(sourceValueProto))&&(!options.deepFilter.blacklist||-1===options.deepFilter.blacklist.indexOf(sourceValueProto)))){if(options.circular){indexOfSource=runtime.references.sources.indexOf(sourceValue)}if(options.flat){// No circular references reconnection when in 'flat' mode
if(0<=indexOfSource){continue}extendOne({depth:runtime.depth+1,prefix:runtime.prefix+sourceKey+options.flat,references:runtime.references},options,targetPointer,sourceValue)}else{if(0<=indexOfSource){// Circular references reconnection...
if(options.descriptor){Object.defineProperty(targetPointer,targetKey,{value:runtime.references.targets[indexOfSource],enumerable:sourceDescriptor.enumerable,writable:sourceDescriptor.writable,configurable:sourceDescriptor.configurable})}else{targetPointer[targetKey]=runtime.references.targets[indexOfSource]}continue}if(!targetPointer[targetKey]||!targetPointer.hasOwnProperty(targetKey)||"object"!==babelHelpers.typeof(targetPointer[targetKey])&&"function"!==typeof targetPointer[targetKey]){if(Array.isArray(sourceValue)){value=[]}else if(options.proto){value=Object.create(sourceValueProto)}// jshint ignore:line
else if(options.inherit){value=Object.create(sourceValue)}else{value={}}if(options.descriptor){Object.defineProperty(targetPointer,targetKey,{value:value,enumerable:sourceDescriptor.enumerable,writable:sourceDescriptor.writable,configurable:sourceDescriptor.configurable})}else{targetPointer[targetKey]=value}}else if(options.proto&&Object.getPrototypeOf(targetPointer[targetKey])!==sourceValueProto){Object.setPrototypeOf(targetPointer[targetKey],sourceValueProto)}else if(options.inherit&&Object.getPrototypeOf(targetPointer[targetKey])!==sourceValue){Object.setPrototypeOf(targetPointer[targetKey],sourceValue)}if(options.circular){runtime.references.sources.push(sourceValue);runtime.references.targets.push(targetPointer[targetKey])}// Recursively extends sub-object
extendOne({depth:runtime.depth+1,prefix:"",references:runtime.references},options,targetPointer[targetKey],sourceValue)}}else if(options.preserve&&targetPointer[targetKey]!==void 0){// Do not overwrite, and so do not delete source's properties that were not moved
continue}else if(!options.inherit){if(options.descriptor){Object.defineProperty(targetPointer,targetKey,sourceDescriptor)}else{targetPointer[targetKey]=sourceValue}}// Delete owned property of the source object
if(options.move){delete source[sourceKey]}}}// export default function extend (target) {
//     for(var i=1; i<arguments.length; ++i) {
//         var from = arguments[i];
//         if(typeof from !== 'object') continue;
//         for(var j in from) {
//             if(from.hasOwnProperty(j)) {
//                 target[j] = typeof from[j]==='object'
//                 ? extend({}, target[j], from[j])
//                 : from[j];
//             }
//         }
//     }
//     return target;
// }
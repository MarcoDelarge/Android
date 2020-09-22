var allowedProviders=["google-analytics","adobe-analytics"];function _getProvider(){var args=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",result=null;allowedProviders.forEach(function(provider){if(-1!==args.indexOf(provider)){result=provider;return}});return result}var pkg=require("./package.json"),path=require("path"),webpack=require("webpack");function webpackConfig(env){var provider=_getProvider(env.provider),isDeploy=env.deploy!==void 0&&"true"===env.deploy;if(!provider){console.log("An analytics provider parameter must be specified: "+allowedProviders.map(function(provider){return"--".concat(provider)}).join(", ")+".");process.exit()}var entryFileName="index-".concat(provider),outputFileName="cells-".concat(provider,"-collector").concat(isDeploy?".min":"",".js"),config={target:"web",entry:"./src/".concat(entryFileName,".js"),output:{path:path.join(__dirname,"/dist"),filename:outputFileName,library:"cellsAnalytics",libraryTarget:"umd"},module:{rules:[{test:/\.js$/,use:{loader:"babel-loader",options:{presets:["env"],plugins:[require("babel-plugin-transform-class-properties"),require("babel-plugin-transform-object-rest-spread")]}// include: [
//   path.resolve(__dirname, "src")
// ],
// exclude: [
//   path.resolve(__dirname, "node_modules")
// ],
// loader: "babel-loader",
// // the loader which should be applied, it'll be resolved relative to the context
// // -loader suffix is no longer optional in webpack2 for clarity reasons
// // see webpack 1 upgrade guide
//
// options: {
//   presets: ["es2015", "stage-0"]
// }
// // options for the loader
}}]},plugins:[],resolve:{extensions:[".es6",".es7",".js"]},devtool:"source-map"// enum
};if(isDeploy){if(!config.plugins){config.plugins=[]}config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress:{warnings:!0}}))}return config}module.exports=webpackConfig;
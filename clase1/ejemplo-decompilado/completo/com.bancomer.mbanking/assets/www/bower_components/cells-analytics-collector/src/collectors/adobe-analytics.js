import BaseAnalyticsCollector from"./base.js";import AdobeAnalyticsProvider from"../providers/adobe-analytics.js";/**
 * Class implementing custom behaviour for Adobe Analytics collector.
 *
 * @extends BaseAnalyticsCollector
 */var AdobeAnalyticsCollector=/*#__PURE__*/function(_BaseAnalyticsCollect){babelHelpers.inherits(AdobeAnalyticsCollector,_BaseAnalyticsCollect);/**
   * Create an analytics collector implementing Adobe Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Adobe Analytics Collector.
   */function AdobeAnalyticsCollector(config){babelHelpers.classCallCheck(this,AdobeAnalyticsCollector);config=Object.assign(config,{provider:new AdobeAnalyticsProvider(config)});return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AdobeAnalyticsCollector).call(this,config))}return AdobeAnalyticsCollector}(BaseAnalyticsCollector);export{AdobeAnalyticsCollector as default};
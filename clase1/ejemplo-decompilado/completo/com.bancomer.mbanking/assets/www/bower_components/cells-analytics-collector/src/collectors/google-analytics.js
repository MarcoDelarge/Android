import BaseAnalyticsCollector from"./base.js";import GoogleAnalyticsProvider from"../providers/google-analytics.js";/**
 * Class implementing custom behaviour for Google Analytics collector.
 *
 * @extends BaseAnalyticsCollector
 */var GoogleAnalyticsCollector=/*#__PURE__*/function(_BaseAnalyticsCollect){babelHelpers.inherits(GoogleAnalyticsCollector,_BaseAnalyticsCollect);/**
   * Create an analytics collector implementing Google Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Google Analytics Collector (trackingId).
   */function GoogleAnalyticsCollector(config){babelHelpers.classCallCheck(this,GoogleAnalyticsCollector);if(!config.trackingId){throw new Error("GoogleAnalyticsCollector must be initialized with 'trackingId'.")}config=Object.assign(config,{provider:new GoogleAnalyticsProvider(config)});return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GoogleAnalyticsCollector).call(this,config))}return GoogleAnalyticsCollector}(BaseAnalyticsCollector);export{GoogleAnalyticsCollector as default};
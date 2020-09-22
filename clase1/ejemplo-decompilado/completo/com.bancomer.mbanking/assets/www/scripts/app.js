(function (document) {
  'use strict';

  function updateHTTPPlugin() {
    if (window.AppConfig.native) {
      window.cordovaCells = window.cordovaCells || {};
      window.cordovaCells.Http = {
        get: function (url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'get', {
            'url': url,
            'params': params,
            'headers': headers
          });
        },
        post: function (url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'post', {
            'url': url,
            'params': params,
            'headers': headers
          });
        },
        put: function (url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'put', {
            'url': url,
            'params': params,
            'headers': headers
          });
        },
        head: function (url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'head', {
            'url': url,
            'params': params,
            'headers': headers
          });
        },
        patch: function (url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'patch', {
            'url': url,
            'params': params,
            'headers': headers
          });
        },
        delete: function (url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'delete', {
            'url': url,
            'params': params,
            'headers': headers
          });
        },
        cleanAllCookies: function (success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'cleanAllCookies', {});
        },
        sslPinning: function (certificates, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'sslPinning', {
            'certificates': certificates
          });
        },
        acceptAllCerts: function (allow, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'acceptAllCerts', {
            'allow': allow
          });
        }
      };
      window.CellsNativePlugins = window.CellsNativePlugins || {};
      window.CellsNativePlugins.Nativesettings = {
        getSetting: function (options, successCallback, errorCallback) {
          window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'NativeSettings', 'getsetting', options);
        }
      };
    }
  }

  function updateAppsFlyerPlugin() {
    if (window.AppConfig.native) {
      var AppsFlyer = {
        trackEvent: function (payload, success, error) {
          window.CellsNativePlugins.pluginManager.execute(success, error, 'AppsFlyerPlugin', 'trackEvent', payload);
        }
      };
      window.CellsNativePlugins = window.CellsNativePlugins || {};
      window.CellsNativePlugins.AppFlyer = AppsFlyer;
    }
  }
  /* eslint-disable complexity */


  function beforeBackStep(backNavigation) {
    var srcPage = backNavigation.currentPage;
    var canContinue = srcPage !== 'cardDetail' && srcPage !== 'reward' && srcPage !== 'rewardFaqDetail' && srcPage !== 'cardGenerateSuccess' && srcPage !== 'cardDynamicCvv' && srcPage !== 'carLoanPaymentPage' && srcPage !== 'increment' && srcPage !== 'incrementReview' && srcPage !== 'creditCardUpgradePage' && srcPage !== 'carLoanPage' && srcPage !== 'mortgagePage' && srcPage !== 'payrollPortabilityCreatePage' && srcPage !== 'payrollAdvanceContractPage' && srcPage !== 'lifeInsuranceMainPage' && srcPage !== 'loanPaymentsPage' && srcPage !== 'mortgageLoanPaymentPage' && srcPage !== 'sa' && srcPage !== 'clarificationsManagementPage' && srcPage !== 'cardGenerateTerms' && srcPage !== 'pocketsDeletePage' && srcPage !== 'pocketsCreatePage' && srcPage !== 'pocketsEditNoPayroll' && srcPage !== 'pocketsSuccessPage' && srcPage !== 'pocketsAddWithdrawSuccessPage' && srcPage !== 'operationalLimitsPage' && srcPage !== 'cardCreditCardPayment' && srcPage !== 'fundsContribution' && srcPage !== 'fundsWithdrawal' && srcPage !== 'fundsInvestmentsContributionSuccessPage' && srcPage !== 'fundsInvestmentsWithdrawalSuccessPage' && srcPage !== 'requestBranchAppointmentPage' && srcPage !== 'channelSettings';
    return {
      continue: canContinue
    };
  }

  window.CellsPolymer.start({
    avoidPolymerEventCache: true,
    mainNode: window.AppConfig.mainNode,
    binding: 'currentview',
    initialTemplate: window.AppConfig.native ? 'loading' : 'login',
    cache: window.AppConfig.cache,
    debug: window.AppConfig.debug,
    engine: window.AppConfig.engine,
    fullProgressiveTransition: window.AppConfig.fullProgressiveTransition,
    prplLevel: window.AppConfig.prplLevel,
    preCache: true,
    preRender: true,
    generateRequestUrl: function generateRequestUrl(page) {
      return window.AppConfig.composerEndpoint + page + '.json';
    },
    componentsPath: window.AppConfig.componentsPath,
    nativeNamespace: 'NativeBridge',
    onNativeBackStepRequest: beforeBackStep,
    routes: window.AppConfig.routes,
    skipNavigations: window.AppConfig.skipNavigations,
    initialPreRender: {},
    onRender: function onrender(template, fixed) {
      updateAppsFlyerPlugin();
      updateHTTPPlugin();

      if (!template.parentNode) {
        document.getElementById(this.mainNode).appendChild(template);
        var eventComponentsLoaded = document.createEvent('Event');
        eventComponentsLoaded.initEvent('componentsInTemplateLoaded', true, true);
        document.body.dispatchEvent(eventComponentsLoaded);
      }

      if (fixed) {
        fixed.forEach(function (component) {
          document.getElementById(component.zone).appendChild(component.node);
        });
      }
    }
  });
})(document);
(function (document) {
  'use strict';

  if (typeof Object.assign !== 'function') {
    // .length of function is 2
    Object.assign = function (target, varArgs) {
      if (target === null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]; // Skip over if undefined or null

        if (nextSource !== null) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  } // Array.prototype.find ES6 polyfill for ES5 versions


  Array.prototype.find = Array.prototype.find || function (callback) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    } else if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }

    var list = Object(this); // Makes sures is always has an positive integer as length.

    var length = list.length >>> 0;
    var thisArg = arguments[1];

    for (var i = 0; i < length; i++) {
      var element = list[i];

      if (callback.call(thisArg, element, i, list)) {
        return element;
      }
    }
  };

  window.AppConfig = {
    "__comment": "Prod environment",
    "countryId": "mx",
    "deployEndpoint": "",
    "lang": "es-MX",
    "i18nPath": "locales/",
    "componentsPath": "./bower_components/",
    "composerEndpoint": "./composerMocks/",
    "appId": "",
    "debug": true,
    "mocks": true,
    "coreCache": true,
    "routerLog": false,
    "prplLevel": 1,
    "initialBundle": ["login.js"],
    "feedback": {
      "urls": {
        "global": "https://www.opinator.com/opi/glomo-test-app-mexico/"
      }
    },
    "globalServices": {
      "idBank": [],
      "requiredToken": "tsec",
      "loginProvider": "bbva-auth",
      "backendUserRequest": true,
      "showGrantedCredit": true,
      "consumerId": "",
      "hasCvv": false,
      "relatedDebitCards": true,
      "host": "https://glomo.bancomermovil.com/SRVS_A02",
      "versions": {
        "appSettings": "0",
        "accounts": "0",
        "apiAggregator": "0",
        "businessDocuments": "0",
        "campaigns": "1",
        "cards": "0",
        "cards-mgt": "v1",
        "catalogs": "0",
        "claims": "1",
        "contactsBook": "0",
        "customers": "0",
        "customerServices": "0",
        "deposits": "1",
        "financial-overview": "0",
        "grantingTicket": "0",
        "interbankTransfers": "0",
        "investmentFunds": "0",
        "loans": "0",
        "mobile": "0",
        "ownTransfers": "0",
        "payments": "0",
        "pois": "0",
        "pockets": "1",
        "private-banking-portfolios": "0",
        "receivers": "1",
        "storedServices": "0",
        "transactions": "0",
        "transfer": "0"
      }
    },
    "preRenderPages": {
      "about": ["login", "dashboard"],
      "account": ["dashboard", "transfer", "accountMoreInfo", "accountTransactions"],
      "accountMoreInfo": ["account"],
      "accountTransactionDetail": ["accountTransactions"],
      "accountTransactions": ["accountTransactionsSearcher"],
      "accountTransactionsSearcher": ["accountTransactions"],
      "card": ["dashboard", "cardMoreInfo", "cardTransactions", "cardCreditCardPayment", "reward"],
      "cardCreditCardPayment": ["creditCardPaymentReview"],
      "cardGenerate": ["cardGenerateTerms"],
      "cardGenerateTerms": ["cardGenerateSuccess", "cardGenerateError"],
      "cardMoreInfo": ["card"],
      "cardTransactions": ["card"],
      "dashboard": ["account", "card", "about", "appFeedback", "help", "profile", "atmLocator"],
      "appFeedback": ["login", "dashboard"],
      "help": ["login", "dashboard"],
      "login": ["about", "appFeedback", "help", "atmLocator", "dashboard"],
      "poisDetail": ["atmLocator"],
      "profile": ["dashboard"],
      "transfer": ["transferReview", "account", "transferAbandonFeedback"],
      "transferAbandonFeedback": ["account", "card"],
      "transferSuccessFeedback": ["account", "card", "transferReview"],
      "transferReview": ["account", "transferSuccessFeedback"],
      "atmLocator": ["login", "dashboard", "searchPlace", "poisDetail"],
      "searchPlace": ["atmLocator"],
      "welcome": ["login"]
    },
    "sessionTimeout": {
      "foreground": 3,
      "background": 5
    },
    "customerService": {
      "phoneNo": ""
    },
    "localCurrency": "MXN",
    "pdfViewerPath": "../../bower_components/pdfjs/web/viewer.html?file=",
    "extraDependencies": ["cells-analytics-collector"],
    "transpile": true,
    "transpileExclude": ["cells-rxjs", "webcomponentsjs", "rxjs", "moment", "d3", "bgadp*", "pdfjs/build/pdf.js", "pdfjs/build/pdf.worker.js", "pdfjs/web/pdf.viewer.js", "pdfjs/web/viewer.html", "pdfjs/web/viewer.css"],
    "bundleExclude": ["bower_components/cells-pdf-viewer/cells-pdf-viewer.js", "bower_components/cells-pdf-viewer/cells-pdf-viewer.html", "bower_components/cells-pdf-viewer/cells-pdf-viewer-styles.html", "bower_components/pdfjs/build/pdf.js", "bower_components/pdfjs/build/pdf.worker.js", "bower_components/pdfjs/web/pdf.viewer.js", "bower_components/pdfjs/web/viewer.html", "bower_components/pdfjs/web/viewer.css", "bower_components/bodymovin/build/player/lottie.min.js"],
    "minifyExclude": ["bower_components/cells-pdf-viewer/cells-pdf-viewer.js", "bower_components/cells-pdf-viewer/cells-pdf-viewer.html", "bower_components/cells-pdf-viewer/cells-pdf-viewer-styles.html", "bower_components/pdfjs/build/pdf.js", "bower_components/pdfjs/build/pdf.worker.js", "bower_components/pdfjs/web/pdf.viewer.js", "bower_components/pdfjs/web/viewer.html", "bower_components/pdfjs/web/viewer.css", "bower_components/bodymovin/build/player/lottie.min.js"],
    "mainNode": "app__content",
    "adobeScriptURL": "https://assets.adobedtm.com/95bb966a4c61b200a089c37679aaf96e22114787/satelliteLib-d0e3030220638b22c533bac481790e8952ae0bf4.js",
    "swiftCode": "",
    "bbvaPhoneNumber": "942210850",
    "bbvaInsurancePhonesClaimsNumbers": {
      "segmentA": {
        "phoneNumber": "5511026132",
        "extension": ""
      },
      "default": {
        "phoneNumber": "5552262685",
        "extension": "#0006"
      }
    },
    "bbvaPhonesClaimsNumbers": {
      "segmentA": {
        "phoneNumber": "5588521495",
        "extension": "#0103"
      },
      "segmentB": {
        "phoneNumber": "5552262685",
        "extension": "#0403"
      },
      "segmentC": {
        "phoneNumber": "5552262685",
        "extension": "#0303"
      },
      "segmentD": {
        "phoneNumber": "5552262685",
        "extension": "#0203"
      },
      "default": {
        "phoneNumber": "5552262685",
        "extension": "#0403"
      }
    },
    "bbvaBanksListId": "0012",
    "pageInstanceID": "pro",
    "phoneNumberContact": "018002262663",
    "saPhoneNumber": "5552262663",
    "saCountryCode": "+52",
    "saBankURL": "http://www.banxico.org.mx/cep/",
    "saDebug": false,
    "enableLitElement": true,
    "onlyLitElements": false,
    "routes": {
      "login": "/auth",
      "aboutInfo": "/about-info",
      "bbvaAbout": "/bbva-about",
      "aboutPage": "/about-page",
      "accountTransactionDetail": "/account/:productId/transaction/:transactionId",
      "applicationFeedback": "/app-feedback",
      "errorPage": "/error",
      "cardCreditCardPayment": "/card-credit-card-payment",
      "creditCardHolderPage": "/credit-card-holder",
      "creditCardHolderNoticePage": "/credit-card-holder-notice-page",
      "creditCardHolderSuccessPage": "/credit-card-holder-success-page",
      "creditCardHolderIncompleteInfoPage": "/credit-card-holder-incomplete-info-page",
      "creditCardHolderRejectionBuroPage": "/credit-card-holder-rejection-buro-page",
      "creditCardHolderErrorPage": "/credit-card-holder-error-page",
      "creditCardPaymentReview": "/credit-card-payment/review",
      "customerContractsListPage": "/customer-contracts-list",
      "customerContractsHelpPage": "/customer-contracts-help",
      "clarificationsManagementPage": "/clarifications-management",
      "clarificationsManagementSuccessPage": "/clarifications-management-success",
      "contractProductsPage": "/contract-products",
      "cardDetail": "/card-detail/:productId",
      "cardEditAlias": "/card/:productId/edit-alias",
      "cardTransactionDetail": "/card/:productId/transaction/:transactionId",
      "cardTransactions": "/card/:productId/transactions",
      "cardDynamicCvv": "/card/:digitalProductId/dynamic-cvv",
      "cardOnOffHelpPage": "/card-on-off-help",
      "codiEnrollPage": "/codi-enrollment",
      "codiWelcomePage": "/codi-welcome",
      "codiSmsInfoPage": "/codi-sms-info",
      "codiRegisterAccountsPage": "/codi-register-accounts",
      "codiAccountValidationPage": "/codi-account-validation",
      "deposit": "/deposit/:productId",
      "depositMoreInfo": "/deposit/:productId/more-info",
      "depositEditAlias": "/deposit-edit-alias",
      "depositTransactionDetail": "/deposit/:deposit-id/transactions/:transaction-id",
      "accountStatementsPage": "/account-statements",
      "feedback": "/generic-feedback",
      "fund": "/fund/:productId",
      "fundMoreInfo": "/fundMoreInfo",
      "fundContractedDetail": "/fund-contracted-detail",
      "increment": "/card/:productId/increment",
      "incrementReview": "/card/:productId/increment/review",
      "payrollAdvancePendingPage": "/payroll-advance-contract-pending",
      "payrollAdvanceErrorPage": "/payroll-advance-contract-error",
      "payrollAdvanceSuccessPage": "/payroll-advance-contract-success",
      "payrollAdvanceContractPage": "/payroll-advance-contract",
      "payrollAdvanceOfferPage": "/payroll-advance-offer",
      "payrollPortabilityCreatePage": "/payroll-portability-create",
      "payrollPortabilityConfirmBirthdayPage": "/payroll-portability-birthday",
      "payrollPortabilityWrongBirthdayPage": "/payroll-portability-wrong-birthday",
      "payrollPortabilitySuccessPage": "/payroll-portability-success",
      "payrollPortabilityProcessPage": "/payroll-portability-process",
      "payrollPortabilityListPage": "/payroll-portability-list",
      "payrollPortabilityAccountsPage": "/glomo-payroll-portability-accounts",
      "checkUpPage": "/financial-health-check-up",
      "checkUpHealthPage": "/financial-health-check-up-status",
      "checkUpOfferDetailPage": "/checkup-offer-detail",
      "carLoanPage": "/loan-car",
      "loading": "/",
      "mortgagePage": "/mortgage",
      "helpInfoPage": "/help-info",
      "creditCardUpgradePage": "/credit-card-upgrade",
      "clarificationsListPage": "/clarifications-list",
      "creditCardUpgradeSuccessPage": "/credit-card-upgrade-success",
      "pocketsDeleteMainPage": "/pockets-delete-main",
      "operations": "/operations",
      "pocketsDeleteSuccessPage": "/pockets-delete-success",
      "pocketsAddWithdrawalMoneyMainPage": "/pocket-add-and-withdrawal-money-main",
      "pocketsListPage": "/pockets-list",
      "pocketsAddWithdrawalMoneySuccessPage": "/pocket-add-and-withdrawal-money-success",
      "cardsListPage": "/cards-list",
      "pinRequest": "/pin-request",
      "pocketsNoticePage": "/createpocketsnotice",
      "pocketsCreatePage": "/createpockets",
      "pocketsDeletePage": "/pockets-delete",
      "pocketsSuccessPage": "/createpocketssuccess",
      "pocketsAddWithdrawSuccessPage": "/addwithdrawpocketssuccess",
      "pocketMovementListPage": "/pocket-movement-list",
      "pocketsEditNoPayroll": "/pockets-edit-no-payroll",
      "pocketsEditUnprogrammerPage": "/pockets-edit-unprogrammer",
      "termsAndConditionsPage": "/terms-and-conditions",
      "accountEditAlias": "/account-edit-alias",
      "accountStatementsPdfPage": "/accounts-statements-pdf",
      "transactionsListWithholdingsPage": "/glomo-transactions-list-withholdings",
      "patrimonialEquitityAssistancePage": "/patrimonial-equitity-assistance/:contractId",
      "patrimonialAttentionHoursMessagePage": "/attention-hours-message",
      "patrimonialContractDetailsPage": "/patrimonial-details/:accountNumber/:productName/:productId",
      "patrimonialDetailPage": "/equity-private-banking-portfolios/:contractId",
      "unitLinkedBalancePage": "/unit-linked-balance/:accountNumber/:productName/:contractId",
      "unitLinkedContractDetailPage": "/unit-linked-contract-detail",
      "configureProductsPage": "/configure-products",
      "sendEmailSuccessPage": "/send-email-success",
      "assistanceManagerInfoPage": "/assistance-manager",
      "assistanceManagerBenefitsPage": "/assistance-manager-benefits",
      "emailComposer": "/email-composer",
      "lifeInsuranceMainPage": "/life-insurance",
      "lifeInsuranceQuestionsPage": "/life-insurance-questions",
      "lifeInsuranceAddBeneficiaryPage": "/life-insurance-add-beneficiary",
      "lifeInsuranceEditPercentagePage": "/life-insurance-edit-percentage",
      "lifeInsuranceHelpPage": "/life-insurance-helps",
      "lifeInsuranceNoticesPage": "/life-insurance-notices",
      "lifeInsuranceSuccessPage": "/life-insurance-success",
      "insuranceDetailCancelPage": "/insurance-detail-cancel",
      "insuranceConsultPage": "/insurance-consult",
      "insuranceCancelPage": "/insurance-cancel",
      "successModifyPage": "/success-modify",
      "pdfViewer": "/pdf-viewer",
      "assistanceSection": "/assistance-section",
      "assistanceSectionInfo": "/assistance-section-info",
      "sa": "/sa",
      "callMeBackPage": "/call-me-back",
      "loanPaymentsPage": "/loan-payments",
      "loanPaymentsSuccessPage": "/loan-payments-success",
      "cardGenerate": "/card/generate",
      "cardGenerateSuccess": "/card/generate/success",
      "cardGenerateTerms": "/card/generate/terms",
      "digitalCardOnOffHelpPage": "/card/digital/on-off-help",
      "cardGenerateError": "/card/generate/error",
      "settingsPage": "/settings",
      "securityMenuPage": "/security-menu-page",
      "pushNotificationListPage": "/push-notification-list",
      "mortgageLoanPaymentPage": "/mortgage-loan-payment",
      "mortgageLoanPaymentSuccessPage": "/mortgage-loan-payment-success",
      "carLoanPaymentPage": "/car-loan-payment",
      "carLoanPaymentSuccessPage": "/car-loan-payment-success",
      "serviceBoxPage": "/service-box",
      "serviceBoxInfoPage": "/service-box-info",
      "fundsContribution": "/funds-contribution",
      "fundsWithdrawal": "/funds-withdrawal",
      "channelSettings": "/channel-settings",
      "depositImpositionUpdate": "/deposit-imposition-update",
      "depositImpositionUpdateSuccess": "/deposit-imposition-update-success",
      "depositsPurchaseSale": "/deposits-purchase-sale",
      "depositsPurchaseSaleSuccess": "/deposits-purchase-sale-success",
      "reward": "/reward",
      "rewardFaqDetail": "/reward-faq-detail",
      "fundsInvestmentsContributionSuccessPage": "/funds-investments-contribution-success",
      "fundsInvestmentsWithdrawalSuccessPage": "/funds-investments-withdrawal-success",
      "securityTipsPage": "/security-tips-dashboard",
      "securityTipsDetailPage": "/security_tips_detail",
      "securityTipsGlossaryPage": "/security-tips-glossary",
      "depositHiring": "/deposit-hiring",
      "depositHiringSuccess": "/deposit-hiring-success",
      "operationalLimitsPage": "/operational-limits-page",
      "mortgageSuccessPage": "/mortgage-success",
      "ppfContractPage": "/ppf-contract",
      "ppfSuccessPage": "/ppf-success",
      "carLoanSuccessPage": "/car-loan-success",
      "cardMoreInfo": "/cardMoreInfo",
      "interestSimulator": "/card/:productId/interest-simulator",
      "appPermissionsPage": "/app-permissions",
      "appPermissionsInfoPage": "/app-permissions-info",
      "requestBranchAppointmentPage": "/request-branch-appointment",
      "requestBranchAppointmentDetailPage": "/request-branch-appointment-detail",
      "requestBranchAppointmentListPage": "/request-branch-appointment-list"
    },
    "native": true,
    "mockNative": false,
    "engine": "native",
    "nativeAndroid": true,
    "nativeShell": true,
    "skipNavigations": [{
      "from": "aboutPage",
      "to": "loading"
    }, {
      "from": "cardGenerateSuccess",
      "to": "loading"
    }, {
      "from": "cardGenerateError",
      "to": "loading"
    }, {
      "from": "clarificationsManagementPage",
      "to": "cardTransactionDetail"
    }, {
      "from": "clarificationsManagementSuccessPage",
      "to": "clarificationsManagementPage"
    }, {
      "from": "creditCardUpgradeSuccessPage",
      "to": "creditCardUpgradePage"
    }, {
      "from": "pocketsAddWithdrawalMoneySuccessPage",
      "to": "pocketsAddWithdrawalMoneyMainPage"
    }, {
      "from": "pocketsDeleteSuccessPage",
      "to": "pocketsDeleteMainPage"
    }, {
      "from": "payrollPortabilityWrongBirthdayPage",
      "to": "payrollPortabilityConfirmBirthdayPage"
    }, {
      "from": "payrollPortabilityProcessPage",
      "to": "payrollPortabilityCreatePage"
    }, {
      "from": "payrollPortabilitySuccessPage",
      "to": "payrollPortabilityCreatePage"
    }, {
      "from": "errorPage",
      "to": "payrollPortabilityCreatePage"
    }, {
      "from": "payrollAdvancePendingPage",
      "to": "payrollAdvanceContractPage"
    }, {
      "from": "payrollAdvanceErrorPage",
      "to": "payrollAdvanceContractPage"
    }, {
      "from": "payrollAdvanceSuccessPage",
      "to": "payrollAdvanceContractPage"
    }, {
      "from": "loanPaymentsSuccessPage",
      "to": "loanPaymentsPage"
    }, {
      "from": "mortgageLoanPaymentSuccessPage",
      "to": "mortgageLoanPaymentPage"
    }, {
      "from": "carLoanPaymentSuccessPage",
      "to": "carLoanPaymentPage"
    }, {
      "from": "accountStatementsPdfPage",
      "to": "accountStatementsPage"
    }, {
      "from": "creditCardHolderIncompleteInfoPage",
      "to": "creditCardHolderPage"
    }, {
      "from": "creditCardHolderSuccessPage",
      "to": "creditCardHolderPage"
    }, {
      "from": "creditCardHolderRejectionBuroPage",
      "to": "creditCardHolderPage"
    }, {
      "from": "creditCardHolderErrorPage",
      "to": "creditCardHolderPage"
    }, {
      "from": "errorPage",
      "to": "creditCardHolderPage"
    }, {
      "from": "errorPage",
      "to": "pocketsListPage"
    }, {
      "from": "mortgageSuccessPage",
      "to": "mortgagePage"
    }, {
      "from": "cardCreditCardPayment",
      "to": "operations"
    }, {
      "from": "creditCardPaymentReview",
      "to": "cardCreditCardPayment"
    }, {
      "from": "mortgageSuccessPage",
      "to": "mortgagePage"
    }, {
      "from": "carLoanSuccessPage",
      "to": "carLoanPage"
    }, {
      "from": "pinRequest",
      "to": "operations"
    }, {
      "from": "cardEditAlias",
      "to": "operations"
    }, {
      "from": "requestBranchAppointmentDetailPage",
      "to": "requestBranchAppointmentPage"
    }],
    "pagesPath": "pages/",
    "once": true,
    "pageDefinitions": [],
    "pages": []
  };
  window.AppComposerConfig = {};

  function updateCache() {
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
      window.applicationCache.swapCache();
    }
  }

  function removeSplashScreen() {
    var loadEl = document.getElementById('splash');

    if (loadEl) {
      loadEl.parentNode.removeChild(loadEl);
      document.body.classList.remove('loading');
    }
  }

  function continueLoading() {
    if (isLoadingInitialPage()) {
      fireComponentsLoadEvent();
    } else {
      loadAppElements(fireComponentsLoadEvent);
    }
  }

  function fireComponentsLoadEvent() {
    var eventComponentsLoaded = new CustomEvent('componentsLoaded');
    document.body.dispatchEvent(eventComponentsLoaded);
  }

  function onScriptLoadError(file, cb) {
    return function () {
      var customEvent = new CustomEvent('scriptLoadError', {
        detail: file
      });
      document.body.dispatchEvent(customEvent);

      if (typeof cb === 'function') {
        cb();
      }
    };
  }

  function _importFile(url, cb, async) {
    var loadAsync = typeof async !== 'undefined' ? async : false;
    var nextBundle = document.createElement('link');
    nextBundle.rel = 'import';
    nextBundle.href = url;
    nextBundle.addEventListener('load', cb);
    nextBundle.addEventListener('error', onScriptLoadError(nextBundle.href, cb));

    if (loadAsync) {
      nextBundle.setAttribute('async', '');
    }

    document.head.appendChild(nextBundle);
  }

  function loadInitialPolymerComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'initial-components.html', cb);
  }

  function loadAppPolymerComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'app-components.html', cb, true);
  }

  function loadInitialLitComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + 'lit-initial-components.html', cb);
  }

  function loadAppLitComponents(cb) {
    _importFile(window.AppConfig.deployEndpoint + 'lit-components.html', cb, true);
  }

  function loadElements() {
    if (window.AppConfig.onlyLitElements) {
      loadInitialLitComponents(continueLoading);
    } else {
      loadInitialPolymerComponents(function () {
        if (window.AppConfig.enableLitElement) {
          loadInitialLitComponents(continueLoading);
        } else {
          continueLoading();
        }
      });
    }
  }

  function loadAppElements(cb) {
    if (window.AppConfig.onlyLitElements) {
      loadAppLitComponents(cb);
    } else {
      loadAppPolymerComponents(function () {
        if (window.AppConfig.enableLitElement) {
          loadAppLitComponents(cb);
        } else {
          if (cb && typeof cb === 'function') {
            cb();
          }
        }
      });
    }
  }

  function loadWebComponentPolyfill() {
    var url = 'none';

    if (window.AppConfig.onlyLitElements) {
      url = window.AppConfig.deployEndpoint + 'scripts/webcomponentsjs/webcomponents-lite.js';
    } else {
      url = window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'webcomponentsjs/webcomponents-lite.js';
    }

    var polyfill = document.createElement('script');
    polyfill.src = url;
    polyfill.addEventListener('load', proxyCustomElements); //window.addEventListener('WebComponentsReady', proxyCustomElements);

    polyfill.addEventListener('error', onScriptLoadError(polyfill.src));
    document.head.appendChild(polyfill);
  }

  function isLoadingInitialPage() {
    var initialPage;
    var hash;
    var isInitialPage = true;

    if (window.AppConfig.initialBundle && window.AppConfig.initialBundle.length > 0) {
      hash = window.location.hash;

      if (hash === '' || hash === '#!/') {
        isInitialPage = true;
      } else {
        initialPage = window.AppConfig.initialBundle[0].split('.')[0];
        isInitialPage = hash.indexOf(initialPage) > -1;
      }
    }

    return isInitialPage;
  }

  function onNavigation(msg) {
    var customEvent = new CustomEvent('aria-announce', {
      detail: msg.detail.detail.page
    });
    document.body.dispatchEvent(customEvent);
  }

  function onAnnounce(msg) {
    var announcer = document.querySelector('#announcer');

    if (announcer) {
      announcer.textContent = msg.detail;
    }
  }

  function detectPlatform(which, orelse) {
    return 'desktop'; //return window.bowser[which] ? which : orelse;
  } //TODO: write a proper platform detection


  function getPlatform() {
    return detectPlatform('ios', detectPlatform('android', 'desktop'));
  }

  function shouldAddCordovaScript(config) {
    var userAgent = window.navigator.userAgent.toLowerCase();
    var ios = /iphone|ipod|ipad/.test(userAgent);
    var android = /android/.test(userAgent);
    var safari = /safari/.test(userAgent);
    var webViewWv = / wv\)/.test(userAgent);
    var crosswalk = /crosswalk/.test(userAgent); //var webViewVersion = /version/.test(userAgent);

    if (!config.cordovaScript) {
      return false;
    }

    if (ios) {
      return !safari;
    }

    if (android) {
      return webViewWv || crosswalk;
    }
  }

  function appendCordovaScript() {
    var script = document.createElement('script');
    script.setAttribute('src', window.AppConfig.cordovaScript);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    script.onerror = onScriptLoadError(window.AppConfig.cordovaScript);
    document.body.appendChild(script);
  }

  function generateRequestHeaders() {
    var composerHeader = {};

    if (window.AppConfig.composerHeaderKey && window.AppConfig.composerHeaderValue) {
      composerHeader[window.AppConfig.composerHeaderKey] = window.AppConfig.composerHeaderValue;
    }

    return composerHeader;
  }

  function onRender(template, fixed) {
    if (!template.parentNode) {
      document.getElementById(this.mainNode).appendChild(template);
      var eventComponentsLoaded = new CustomEvent('componentsInTemplateLoaded');
      document.body.dispatchEvent(eventComponentsLoaded);
    }

    if (fixed) {
      document.getElementById('external__header').innerHTML = '';
      document.getElementById('external__footer').innerHTML = '';
      fixed.forEach(function (component) {
        document.getElementById(component.zone).appendChild(component.node);
      });
    }
  }

  function startCore(options) {
    return function () {
      var reference = getBridgeEngineReference(options);
      new reference(options);
    };
  }

  function getBridgeEngineReference(options) {
    var enginesNamespace = {
      polymer: 'CellsPolymerBridge',
      native: 'CellsNativeBridge'
    };
    var defaultEngine = 'polymer';
    var engine = (options.engine || defaultEngine).toLowerCase();

    if (!enginesNamespace[engine]) {
      engine = defaultEngine;
      console.warn('Invalid value for AppConfig.engine. Using ' + defaultEngine);
    }

    var engineReference = enginesNamespace[engine];
    return window[engineReference];
  }

  function webComponentsSupported() {
    return window.customElements && 'import' in document.createElement('link') && 'content' in document.createElement('template');
  }

  function proxyCustomElements() {
    var _customElementsDefine = window.customElements.define;

    window.customElements.define = function (name, cl, conf) {
      if (!customElements.get(name)) {
        _customElementsDefine.call(window.customElements, name, cl, conf);
      } else {
        console.warn(name + 'has been defined twice');
      }
    };

    loadElements();
  }

  window.CellsPolymer = {
    start: function (options) {
      var config = Object.assign({
        binding: 'currentview',
        cache: window.AppConfig.coreCache || false,
        domMode: 'shadow',
        headers: generateRequestHeaders(),
        mainNode: 'app__content',
        onRender: onRender,
        getPlatform: getPlatform,
        preCache: false,
        preRender: false
      }, window.AppConfig, options, AppComposerConfig);
      var onNavigation = config.onNavigation || onNavigation;
      var removeSplash = config.removeSplashScreen || removeSplashScreen;
      var updateCache = config.updateCache || updateCache;
      window.Polymer = window.Polymer || {
        dom: config.domMode,
        lazyRegister: 'max',
        useNativeCSSProperties: true
      };
      document.body.addEventListener('aria-announce', onAnnounce);
      document.body.addEventListener('componentsInTemplateLoaded', removeSplash, {
        once: true
      });

      if (config.initialBundle && isLoadingInitialPage() && !window.AppConfig.onlyLitElements) {
        document.body.addEventListener('componentsInTemplateLoaded', loadAppElements);
      }

      document.body.addEventListener('componentsLoaded', startCore(config), {
        once: true
      });

      if (options.enableSSLPinning) {
        document.body.addEventListener('componentsLoaded', options.enableSSLPinning, {
          once: true
        });
      }

      document.getElementById(config.mainNode).addEventListener('nav-request', onNavigation);

      if (window.applicationCache) {
        window.applicationCache.addEventListener('updateready', updateCache);
      }

      if (shouldAddCordovaScript(config)) {
        appendCordovaScript();
      }

      if (!config.skipInitialLoad) {
        this._loadElements();
      }
    },
    _loadElements: function () {
      if (webComponentsSupported()) {
        proxyCustomElements();
      } else {
        loadWebComponentPolyfill();
      }
    }
  };
})(document);
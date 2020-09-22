var cdContext = cdContext || {};

(function (exports) {
    "use strict";

    exports.NativeCommunicator = class NativeCommunicator {
        listen() {

            window.addEventListener('beforeunload',(e) => {
                this.sendToNative('onbeforeunload');
            });

            window.addEventListener('message', (e) => {
                let msg = e.data;
                switch (msg.msgType) {
                    case 'dataFromSlave':
                        this.sendToNative(msg.msgType, msg.data);
                        break;
                    case 'registerSlave':
                        this.sendToNative(msg.msgType, msg.data);
                        break;
                    case 'logPerfSlave':
                        msg.data.eventName && this.sendToNative(msg.msgType, msg.data);
                        break;
                    case 'updateMasterContext':
                        this.sendToNative(msg.msgType, msg.data);
                        break;
                }
            });
        }

        sendToNative(msgType, data) {
            if (typeof BCNative !== 'undefined') {
                BCNative.onDataFromWeb(msgType, data ? JSON.stringify(data) : {});
            }
        }
    }

    new exports.NativeCommunicator().listen();

})(cdContext);





System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NotificationService;
    return {
        setters:[],
        execute: function() {
            NotificationService = (function () {
                function NotificationService() {
                    this.notify = [{
                            priority: 'low',
                            type: 'local'
                        }, {
                            priority: 'high',
                            type: 'server'
                        }, {
                            priority: 'high',
                            type: 'local'
                        }, {
                            priority: 'high',
                            type: 'server'
                        }];
                }
                NotificationService.prototype.get = function () {
                    return this.notify;
                };
                NotificationService.prototype.set = function (newNotify) {
                    this.notify.push(newNotify);
                };
                NotificationService.prototype.delete = function (notifyIndex) {
                    this.notify.splice(notifyIndex, 1);
                };
                return NotificationService;
            }());
            exports_1("NotificationService", NotificationService);
        }
    }
});
//# sourceMappingURL=notification.service.js.map
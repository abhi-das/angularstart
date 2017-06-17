System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserProfileRulesService;
    return {
        setters:[],
        execute: function() {
            UserProfileRulesService = (function () {
                function UserProfileRulesService() {
                }
                UserProfileRulesService.prototype.firstName = function (firstName) {
                    if (firstName.value.toLowerCase().trim().length == 0) {
                        return null;
                    }
                    if (firstName.value.toLowerCase().trim() !== 'john') {
                        // console.log("error!!");
                        return {
                            'firstName': true
                        };
                    }
                    else {
                        // console.log("no error!!");
                        return null;
                    }
                };
                return UserProfileRulesService;
            }());
            exports_1("UserProfileRulesService", UserProfileRulesService);
        }
    }
});
//# sourceMappingURL=service.user.form.rules.js.map
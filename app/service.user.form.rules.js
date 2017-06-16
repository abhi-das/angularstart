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
                UserProfileRulesService.prototype.firstNameRules = function (firstName) {
                    console.log(firstName.value.trim());
                    if (firstName.value.toLowerCase().trim().length > 0) {
                        return null;
                    }
                    if (firstName.value.toLowerCase().trim() == 'test') {
                        return {
                            'firstName': false
                        };
                    }
                    else {
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
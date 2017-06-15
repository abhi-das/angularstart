System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidatorRulesService;
    return {
        setters:[],
        execute: function() {
            ValidatorRulesService = (function () {
                function ValidatorRulesService() {
                }
                ValidatorRulesService.prototype.lastNameRules = function (empLastName) {
                    if (empLastName.value !== "test") {
                        console.log("not test ");
                        return { "lastName": true };
                    }
                    else {
                        console.log("yes test ");
                        return null;
                    }
                };
                return ValidatorRulesService;
            }());
            exports_1("ValidatorRulesService", ValidatorRulesService);
        }
    }
});
//# sourceMappingURL=validator.rules.service.js.map
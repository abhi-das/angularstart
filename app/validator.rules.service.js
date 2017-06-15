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
                    if (empLastName.value.trim().length === 0) {
                        return null;
                    }
                    if (empLastName.value.trim() !== "test") {
                        /*Fail the test then send error message back to controller*/
                        return {
                            'lastName': {
                                validFlag: true,
                                testPass: "YES for last name"
                            }
                        };
                    }
                    else {
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
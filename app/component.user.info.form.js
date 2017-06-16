System.register(['@angular/core', '@angular/forms', './service.user.form.rules'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, service_user_form_rules_1;
    var UserInfoFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (service_user_form_rules_1_1) {
                service_user_form_rules_1 = service_user_form_rules_1_1;
            }],
        execute: function() {
            UserInfoFormComponent = (function () {
                function UserInfoFormComponent(userRulesService) {
                    this.userRulesService = userRulesService;
                }
                UserInfoFormComponent.prototype.ngOnInit = function () {
                    this.form = new forms_1.FormGroup({
                        firstName: new forms_1.FormControl('', this.userRulesService.firstNameRules),
                        lastName: new forms_1.FormControl('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        location: new forms_1.FormControl('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        email: new forms_1.FormControl('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ]))
                    });
                };
                UserInfoFormComponent.prototype.onFormSubmit = function (form) {
                    console.log(form);
                };
                UserInfoFormComponent = __decorate([
                    core_1.Component({
                        selector: "user-info-form",
                        templateUrl: "./partials/user-info-form.html"
                    }), 
                    __metadata('design:paramtypes', [service_user_form_rules_1.UserProfileRulesService])
                ], UserInfoFormComponent);
                return UserInfoFormComponent;
            }());
            exports_1("UserInfoFormComponent", UserInfoFormComponent);
        }
    }
});
//# sourceMappingURL=component.user.info.form.js.map
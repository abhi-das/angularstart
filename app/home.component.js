System.register(['@angular/core', './shared.service', './emp.service'], function(exports_1, context_1) {
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
    var core_1, shared_service_1, emp_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_service_1_1) {
                shared_service_1 = shared_service_1_1;
            },
            function (emp_service_1_1) {
                emp_service_1 = emp_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(sharedSrv, empLstSrv) {
                    this.sharedSrv = sharedSrv;
                    this.empLstSrv = empLstSrv;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sharedSrv.currentMessage.subscribe(function (tmpMsg) { return _this.msg = tmpMsg; });
                    this.empLstSrv.currentList.subscribe(function (lst) { return _this.empList = lst; });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-comp',
                        templateUrl: './partials/home-comp.html'
                    }), 
                    __metadata('design:paramtypes', [shared_service_1.SharedService, emp_service_1.EmpService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map
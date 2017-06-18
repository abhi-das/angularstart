System.register(['@angular/core', './emp-detail-service-observ'], function(exports_1, context_1) {
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
    var core_1, emp_detail_service_observ_1;
    var EmpDetailObserveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (emp_detail_service_observ_1_1) {
                emp_detail_service_observ_1 = emp_detail_service_observ_1_1;
            }],
        execute: function() {
            EmpDetailObserveComponent = (function () {
                function EmpDetailObserveComponent(detailObsService) {
                    this.detailObsService = detailObsService;
                }
                EmpDetailObserveComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.detailObsService.getDetails("emp-details.json").subscribe(function (empInfo) { return _this.detailInfo = empInfo; });
                };
                EmpDetailObserveComponent = __decorate([
                    core_1.Component({
                        selector: "emp-detail-observe",
                        templateUrl: './partials/emp-detail-observe.html',
                        providers: [
                            emp_detail_service_observ_1.EmpDetailServiceObserv
                        ]
                    }), 
                    __metadata('design:paramtypes', [emp_detail_service_observ_1.EmpDetailServiceObserv])
                ], EmpDetailObserveComponent);
                return EmpDetailObserveComponent;
            }());
            exports_1("EmpDetailObserveComponent", EmpDetailObserveComponent);
        }
    }
});
//# sourceMappingURL=emp-detail-observable-component.js.map
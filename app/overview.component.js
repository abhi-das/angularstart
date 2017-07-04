System.register(['@angular/core', '@angular/router', './emp.detail.service'], function(exports_1, context_1) {
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
    var core_1, router_1, emp_detail_service_1;
    var OverviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (emp_detail_service_1_1) {
                emp_detail_service_1 = emp_detail_service_1_1;
            }],
        execute: function() {
            OverviewComponent = (function () {
                function OverviewComponent(actRoute, empDtSrv) {
                    this.actRoute = actRoute;
                    this.empDtSrv = empDtSrv;
                }
                OverviewComponent.prototype.showMe = function () {
                    console.log("hello");
                };
                OverviewComponent.prototype.ngOnInit = function () {
                    /*this.actRoute.parent.params.subscribe(
                        function(params) {
                            this.thisId = params.id;
                            // this.displayOverview = this.empDtSrv.getEmpDetail(this.thisId);
                        },
                        function(err) {
                            console.error(err);
                        },
                        function() {
                            console.log("completed");
                        }
                    );*/
                    var _this = this;
                    this.actRoute.parent.params.subscribe(function (params) {
                        //params direct can be assigned to getEmpDetail function; require to store in variable, otherwise build error will be occured.
                        _this.empId = params;
                        _this.displayOverview = _this.empDtSrv.getEmpDetail(_this.empId.id);
                    });
                };
                OverviewComponent.prototype.ngOnDestroy = function () {
                    // console.log("destroy..");
                };
                OverviewComponent = __decorate([
                    core_1.Component({
                        templateUrl: './partials/overview.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, emp_detail_service_1.EmpDetailService])
                ], OverviewComponent);
                return OverviewComponent;
            }());
            exports_1("OverviewComponent", OverviewComponent);
        }
    }
});
//# sourceMappingURL=overview.component.js.map
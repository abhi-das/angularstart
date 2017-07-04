System.register(['@angular/core', './emp.list.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, emp_list_service_1, router_1;
    var EmpListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (emp_list_service_1_1) {
                emp_list_service_1 = emp_list_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EmpListComponent = (function () {
                function EmpListComponent(empListSrv, router) {
                    this.empListSrv = empListSrv;
                    this.router = router;
                }
                EmpListComponent.prototype.ngOnInit = function () {
                    this.empListArr = this.empListSrv.getEmpList();
                };
                EmpListComponent.prototype.showDetailFn = function (id) {
                    this.router.navigate(['/emplist', id]);
                };
                EmpListComponent = __decorate([
                    core_1.Component({
                        selector: 'emp-list',
                        templateUrl: './partials/emp-list.html'
                    }), 
                    __metadata('design:paramtypes', [emp_list_service_1.EmpListService, router_1.Router])
                ], EmpListComponent);
                return EmpListComponent;
            }());
            exports_1("EmpListComponent", EmpListComponent);
        }
    }
});
//# sourceMappingURL=emp.list.component.js.map
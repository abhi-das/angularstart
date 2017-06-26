System.register(['@angular/core', './nav.service'], function(exports_1, context_1) {
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
    var core_1, nav_service_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(navSrv) {
                    this.navSrv = navSrv;
                    this.childEv = new core_1.EventEmitter();
                }
                NavComponent.prototype.ngOnInit = function () {
                    this.navList = this.navSrv.getNav();
                };
                NavComponent.prototype.changePage = function (vl) {
                    // console.log(vl.target.innerHTML);
                    this.childEv.emit(vl.target.innerHTML);
                };
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'nav-component',
                        templateUrl: './partials/nav-component.html',
                        outputs: ['childEv'],
                        providers: [nav_service_1.NavService]
                    }), 
                    __metadata('design:paramtypes', [nav_service_1.NavService])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.component.js.map
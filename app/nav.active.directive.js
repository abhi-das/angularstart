System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var NavActiveDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavActiveDirective = (function () {
                function NavActiveDirective() {
                    this.isActive = true;
                }
                Object.defineProperty(NavActiveDirective.prototype, "navActiveMenuItem", {
                    /* [----IMPORATANT---]
                        @Input setter method default name will the same as the Directive Name
                    */
                    set: function (value) {
                        this.isActive = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.HostBinding('class.isActive'), 
                    __metadata('design:type', Object)
                ], NavActiveDirective.prototype, "isActive", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], NavActiveDirective.prototype, "navActiveMenuItem", null);
                NavActiveDirective = __decorate([
                    core_1.Directive({
                        selector: '[navActiveMenuItem]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavActiveDirective);
                return NavActiveDirective;
            }());
            exports_1("NavActiveDirective", NavActiveDirective);
        }
    }
});
//# sourceMappingURL=nav.active.directive.js.map
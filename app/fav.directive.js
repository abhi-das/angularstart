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
    var FavDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavDirective = (function () {
                function FavDirective() {
                    /* Add CSS Class based on Default value */
                    this.isFavorite = false;
                }
                Object.defineProperty(FavDirective.prototype, "myFav", {
                    /* Set the Default value */
                    set: function (item) {
                        this.countryName = item;
                        this.isFavorite = item.isFavorite;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                /* Bind Event on Fav icon click and update the value in Array*/
                FavDirective.prototype.onClickCustomHandler = function () {
                    this.isFavorite = !this.isFavorite;
                    this.countryName.isFavorite = this.isFavorite;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FavDirective.prototype, "myFav", null);
                __decorate([
                    core_1.HostBinding('class.fav-selected'), 
                    __metadata('design:type', Object)
                ], FavDirective.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.HostListener('click'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], FavDirective.prototype, "onClickCustomHandler", null);
                FavDirective = __decorate([
                    core_1.Directive({
                        selector: '[myFav]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavDirective);
                return FavDirective;
            }());
            exports_1("FavDirective", FavDirective);
        }
    }
});
//# sourceMappingURL=fav.directive.js.map
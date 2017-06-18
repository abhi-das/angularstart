System.register(['@angular/core', './country.service'], function(exports_1, context_1) {
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
    var core_1, country_service_1;
    var ShowCountryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }],
        execute: function() {
            ShowCountryComponent = (function () {
                function ShowCountryComponent(countryNameServ) {
                    this.countryNameServ = countryNameServ;
                }
                ShowCountryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.countryNameServ.getCountryName().subscribe(function (country) { return _this.countryNames = country; });
                    ;
                };
                ShowCountryComponent = __decorate([
                    core_1.Component({
                        selector: 'show-country',
                        templateUrl: './partials/show-country.html',
                        providers: [
                            country_service_1.CountryNameService
                        ]
                    }), 
                    __metadata('design:paramtypes', [country_service_1.CountryNameService])
                ], ShowCountryComponent);
                return ShowCountryComponent;
            }());
            exports_1("ShowCountryComponent", ShowCountryComponent);
        }
    }
});
//# sourceMappingURL=show.country.component.js.map
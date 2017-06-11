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
    var Countries, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Countries = (function () {
                function Countries() {
                }
                return Countries;
            }());
            exports_1("Countries", Countries);
            AppComponent = (function () {
                function AppComponent() {
                    this.countryName = "CANADA";
                    this.countryList = [
                        {
                            countryNm: "Canada",
                            countryShortName: "CA"
                        }, {
                            countryNm: "Netherland",
                            countryShortName: "ND"
                        }, {
                            countryNm: "Austria",
                            countryShortName: "AS"
                        }, {
                            countryNm: "Astralia",
                            countryShortName: "AST"
                        }, {
                            countryNm: "Swizerland",
                            countryShortName: "SZ"
                        }
                    ];
                }
                AppComponent.prototype.onClickTest = function (item, ele) {
                    // console.log(item);
                    // console.log(ele);
                    this.countryName = item.countryNm;
                };
                AppComponent.prototype.addCountryFn = function (value) {
                    var entryIndex = this.countryList.map(function (e) {
                        return e.countryNm.toLowerCase();
                    }).indexOf(value.toLowerCase());
                    if (value !== '' && entryIndex < 0) {
                        this.countryList.push({
                            countryNm: value
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './partials/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*var COUNTRIES:Countries[] = [{
    countryName: "Canada",
    countryShortName: "CA"
}, {
    countryName: "Netherland",
    countryShortName: "ND"
}, {
    countryName: "Austria",
    countryShortName: "AS"
}, {
    countryName: "Astralia",
    countryShortName: "AST"
}, {
    countryName: "Swizerland",
    countryShortName: "SZ"
}];*/ 
//# sourceMappingURL=app.component.js.map
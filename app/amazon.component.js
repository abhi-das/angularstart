System.register(['@angular/core', './amazon-service'], function(exports_1, context_1) {
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
    var core_1, amazon_service_1;
    var AmazonFeedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (amazon_service_1_1) {
                amazon_service_1 = amazon_service_1_1;
            }],
        execute: function() {
            AmazonFeedComponent = (function () {
                function AmazonFeedComponent(amzSer) {
                    this.amzSer = amzSer;
                }
                AmazonFeedComponent.prototype.ngOnInit = function () {
                    var dd = this.amzSer.getAmzData();
                };
                AmazonFeedComponent = __decorate([
                    core_1.Component({
                        selector: 'amazon-feed',
                        templateUrl: './partials/amazon-feed.html',
                        providers: [amazon_service_1.AmazonService]
                    }), 
                    __metadata('design:paramtypes', [amazon_service_1.AmazonService])
                ], AmazonFeedComponent);
                return AmazonFeedComponent;
            }());
            exports_1("AmazonFeedComponent", AmazonFeedComponent);
        }
    }
});
//# sourceMappingURL=amazon.component.js.map
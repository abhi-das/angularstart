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
    var FlightInfoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlightInfoService = (function () {
                function FlightInfoService() {
                    this.info = [{
                            "id": 1,
                            "flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
                            "time": "Dolor ad duis tempor laboris. 02:22 EST",
                            "location": "Australia - Mumbai"
                        }, {
                            "id": 2,
                            "flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
                            "time": "Aliqua esse nostrud ut. 01:44 EST",
                            "location": "Netherland - USA"
                        }, {
                            "id": 3,
                            "flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
                            "time": "Anim ad. 12:55 EST",
                            "location": "Japan - Kolkata"
                        }, {
                            "id": 4,
                            "flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
                            "time": "Anim exercitation veniam do. 05:05 EST",
                            "location": "Canada - Newzeland"
                        }];
                }
                FlightInfoService.prototype.getInfoById = function (id) {
                    return this.info.filter(function (finfo) { return finfo.id == id; });
                };
                FlightInfoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FlightInfoService);
                return FlightInfoService;
            }());
            exports_1("FlightInfoService", FlightInfoService);
        }
    }
});
//# sourceMappingURL=flight.info.service.js.map
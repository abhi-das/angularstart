System.register(['@angular/core', './flight.list.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, flight_list_service_1, router_1;
    var FlightListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flight_list_service_1_1) {
                flight_list_service_1 = flight_list_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FlightListComponent = (function () {
                function FlightListComponent(_fListSrv, _router) {
                    this._fListSrv = _fListSrv;
                    this._router = _router;
                }
                FlightListComponent.prototype.ngOnInit = function () {
                    this.flightList = this._fListSrv.getFlightList();
                };
                FlightListComponent.prototype.showInfo = function (flight) {
                    this.flightId = flight.id;
                    this._router.navigate(["flight", this.flightId]);
                };
                FlightListComponent = __decorate([
                    core_1.Component({
                        selector: 'flight-list',
                        templateUrl: './partials/flight-list.html'
                    }), 
                    __metadata('design:paramtypes', [flight_list_service_1.FlightListService, router_1.Router])
                ], FlightListComponent);
                return FlightListComponent;
            }());
            exports_1("FlightListComponent", FlightListComponent);
        }
    }
});
//# sourceMappingURL=flight.list.component.js.map
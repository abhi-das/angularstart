System.register(['@angular/core', '@angular/platform-browser', './app.component', './flight.list.component', './flight.list.service', './flight.info.component', './flight.info.service', './flight.time.component', './flight.location.component', './time.parent.component', './time.child.component', './app.route'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, flight_list_component_1, flight_list_service_1, flight_info_component_1, flight_info_service_1, flight_time_component_1, flight_location_component_1, time_parent_component_1, time_child_component_1, app_route_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (flight_list_component_1_1) {
                flight_list_component_1 = flight_list_component_1_1;
            },
            function (flight_list_service_1_1) {
                flight_list_service_1 = flight_list_service_1_1;
            },
            function (flight_info_component_1_1) {
                flight_info_component_1 = flight_info_component_1_1;
            },
            function (flight_info_service_1_1) {
                flight_info_service_1 = flight_info_service_1_1;
            },
            function (flight_time_component_1_1) {
                flight_time_component_1 = flight_time_component_1_1;
            },
            function (flight_location_component_1_1) {
                flight_location_component_1 = flight_location_component_1_1;
            },
            function (time_parent_component_1_1) {
                time_parent_component_1 = time_parent_component_1_1;
            },
            function (time_child_component_1_1) {
                time_child_component_1 = time_child_component_1_1;
            },
            function (app_route_1_1) {
                app_route_1 = app_route_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_route_1.APP_ROUTE
                        ],
                        declarations: [
                            app_component_1.AppComponent, flight_info_component_1.FlightInfoComponent, flight_list_component_1.FlightListComponent, flight_time_component_1.FlightTimeComponent, flight_location_component_1.FlightLocationComponent,
                            time_parent_component_1.TimeParentComponent, time_child_component_1.TimeChildComponent
                        ],
                        providers: [
                            flight_info_service_1.FlightInfoService, flight_list_service_1.FlightListService
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.modules.js.map
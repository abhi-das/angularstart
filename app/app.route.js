System.register(['@angular/router', './flight.list.component', './flight.info.component', './flight.time.component', './flight.location.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, flight_list_component_1, flight_info_component_1, flight_time_component_1, flight_location_component_1;
    var homePageRoute, flightListRoute, flightInfoRoute, routes, APP_ROUTE;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flight_list_component_1_1) {
                flight_list_component_1 = flight_list_component_1_1;
            },
            function (flight_info_component_1_1) {
                flight_info_component_1 = flight_info_component_1_1;
            },
            function (flight_time_component_1_1) {
                flight_time_component_1 = flight_time_component_1_1;
            },
            function (flight_location_component_1_1) {
                flight_location_component_1 = flight_location_component_1_1;
            }],
        execute: function() {
            homePageRoute = {
                path: '',
                pathMatch: 'full',
                redirectTo: 'flight'
            };
            flightListRoute = {
                path: 'flight',
                component: flight_list_component_1.FlightListComponent
            };
            flightInfoRoute = {
                path: 'flight/:id',
                component: flight_info_component_1.FlightInfoComponent,
                children: [
                    { path: 'time', component: flight_time_component_1.FlightTimeComponent },
                    { path: 'location', component: flight_location_component_1.FlightLocationComponent },
                    { path: '', pathMatch: 'full', redirectTo: 'time' }
                ]
            };
            routes = [
                flightListRoute,
                flightInfoRoute,
                homePageRoute
            ];
            exports_1("APP_ROUTE", APP_ROUTE = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.route.js.map
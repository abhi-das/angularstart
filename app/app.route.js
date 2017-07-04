System.register(['@angular/router', './emp.home.component', './emp.list.component', './emp.detail.component', './overview.component', './bio.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, emp_home_component_1, emp_list_component_1, emp_detail_component_1, overview_component_1, bio_component_1;
    var indexRoute, fallBankRoute, routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (emp_home_component_1_1) {
                emp_home_component_1 = emp_home_component_1_1;
            },
            function (emp_list_component_1_1) {
                emp_list_component_1 = emp_list_component_1_1;
            },
            function (emp_detail_component_1_1) {
                emp_detail_component_1 = emp_detail_component_1_1;
            },
            function (overview_component_1_1) {
                overview_component_1 = overview_component_1_1;
            },
            function (bio_component_1_1) {
                bio_component_1 = bio_component_1_1;
            }],
        execute: function() {
            indexRoute = {
                path: "",
                component: emp_home_component_1.EmpHomeComponent
            };
            fallBankRoute = {
                path: "**",
                component: emp_home_component_1.EmpHomeComponent
            };
            routes = [
                { path: "home", component: emp_home_component_1.EmpHomeComponent },
                { path: 'emplist', component: emp_list_component_1.EmpListComponent },
                { path: 'emplist/:id', component: emp_detail_component_1.EmpDetailComponent,
                    children: [
                        { path: 'overview', component: overview_component_1.OverviewComponent },
                        { path: 'bio', component: bio_component_1.BioComponent },
                        { path: '', pathMatch: 'full', redirectTo: 'overview' }
                    ]
                },
                indexRoute,
                fallBankRoute
            ];
            exports_1("APP_ROUTES", APP_ROUTES = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.route.js.map
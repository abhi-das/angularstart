System.register(['@angular/router', './home.component', './contact.component', './executive.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, contact_component_1, executive_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (executive_component_1_1) {
                executive_component_1 = executive_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: ':executive', component: executive_component_1.ExecutiveComponent },
                { path: '', pathMatch: 'full', redirectTo: "home" }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.route.js.map
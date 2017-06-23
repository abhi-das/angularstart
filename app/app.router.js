System.register(['@angular/router', './home.page.component', './product.page.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_page_component_1, product_page_component_1;
    var appRoutes, Routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_page_component_1_1) {
                home_page_component_1 = home_page_component_1_1;
            },
            function (product_page_component_1_1) {
                product_page_component_1 = product_page_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: "home", component: home_page_component_1.HomePageComponent },
                { path: "product", component: product_page_component_1.ProductPageComponent },
                { path: "", pathMatch: "full", redirectTo: "home" }
            ];
            exports_1("Routing", Routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.router.js.map
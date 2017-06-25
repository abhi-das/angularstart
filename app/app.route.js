System.register(['@angular/router', './home.decore.component', './bath.product.component', './computer.game.component', './menu.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_decore_component_1, bath_product_component_1, computer_game_component_1, menu_component_1;
    var routes, AppRoute;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_decore_component_1_1) {
                home_decore_component_1 = home_decore_component_1_1;
            },
            function (bath_product_component_1_1) {
                bath_product_component_1 = bath_product_component_1_1;
            },
            function (computer_game_component_1_1) {
                computer_game_component_1 = computer_game_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'home-decore', component: home_decore_component_1.HomeDecoreComponent },
                { path: 'bath-product', component: bath_product_component_1.BathProductComponent },
                { path: 'computer-game', component: computer_game_component_1.ComputerGameComponent },
                { path: 'home', component: menu_component_1.MenuListComponent },
                { path: '', pathMatch: 'full', redirectTo: 'home' }
            ];
            exports_1("AppRoute", AppRoute = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.route.js.map
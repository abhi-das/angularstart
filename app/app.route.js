System.register(['@angular/router', './dashboard.component', './notification.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, notification_component_1;
    var routes, AppRouter;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'notification', component: notification_component_1.NotificationComponent },
                { path: '', pathMatch: 'full', redirectTo: 'notification' }
            ];
            exports_1("AppRouter", AppRouter = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.route.js.map
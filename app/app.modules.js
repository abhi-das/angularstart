System.register(['@angular/core', '@angular/platform-browser', './app.route', './emp.list.service', './emp.detail.service', './emp.home.component', './emp.list.component', './emp.detail.component', './overview.component', './bio.component', './app.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_route_1, emp_list_service_1, emp_detail_service_1, emp_home_component_1, emp_list_component_1, emp_detail_component_1, overview_component_1, bio_component_1, app_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_route_1_1) {
                app_route_1 = app_route_1_1;
            },
            function (emp_list_service_1_1) {
                emp_list_service_1 = emp_list_service_1_1;
            },
            function (emp_detail_service_1_1) {
                emp_detail_service_1 = emp_detail_service_1_1;
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
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_route_1.APP_ROUTES
                        ],
                        declarations: [
                            app_component_1.AppComponent, emp_home_component_1.EmpHomeComponent, emp_list_component_1.EmpListComponent, emp_detail_component_1.EmpDetailComponent, overview_component_1.OverviewComponent, bio_component_1.BioComponent
                        ],
                        providers: [emp_list_service_1.EmpListService, emp_detail_service_1.EmpDetailService],
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
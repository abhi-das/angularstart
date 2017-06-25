System.register(["@angular/core", './menu.list.data'], function(exports_1, context_1) {
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
    var core_1, menu_list_data_1;
    var MenuListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_list_data_1_1) {
                menu_list_data_1 = menu_list_data_1_1;
            }],
        execute: function() {
            MenuListComponent = (function () {
                function MenuListComponent(menuListData) {
                    this.menuListData = menuListData;
                }
                MenuListComponent.prototype.ngOnInit = function () {
                    this.menuList = this.menuListData.getList();
                };
                MenuListComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-list',
                        templateUrl: './partials/menu-list.html',
                        providers: [
                            menu_list_data_1.MenuListData
                        ]
                    }), 
                    __metadata('design:paramtypes', [menu_list_data_1.MenuListData])
                ], MenuListComponent);
                return MenuListComponent;
            }());
            exports_1("MenuListComponent", MenuListComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map
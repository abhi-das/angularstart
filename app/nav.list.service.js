System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavListService;
    return {
        setters:[],
        execute: function() {
            NavListService = (function () {
                function NavListService() {
                    this.menuList = [{
                            name: 'Rooftop Accessary',
                            path: 'rooftop-accessary',
                            isActive: false
                        }, {
                            name: 'Living Room Decore',
                            path: 'living-room-decore',
                            isActive: true
                        }, {
                            name: 'Bath Decore',
                            path: 'bath-decore',
                            isActive: false
                        }, {
                            name: 'Living Room Accessary',
                            path: 'living-room-accessary',
                            isActive: false
                        }];
                }
                NavListService.prototype.getMenuList = function () {
                    return this.menuList;
                };
                NavListService.prototype.getActiveMenuList = function () {
                    var activeList = this.menuList.filter(function (ele, idx) {
                        if (ele.isActive === true) {
                            var selectActive = {
                                element: ele,
                                index: idx
                            };
                            return selectActive;
                        }
                    });
                    return activeList;
                };
                NavListService.prototype.getMenuByIndex = function (idx) {
                    return this.menuList[idx];
                };
                return NavListService;
            }());
            exports_1("NavListService", NavListService);
        }
    }
});
//# sourceMappingURL=nav.list.service.js.map
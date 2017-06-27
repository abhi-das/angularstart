System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavService;
    return {
        setters:[],
        execute: function() {
            NavService = (function () {
                function NavService() {
                    this.navList = [{
                            name: 'Home Decore',
                            path: 'home-decore',
                            isActive: false
                        }, {
                            name: 'Bath Products',
                            path: 'bath-product',
                            isActive: false
                        }, {
                            name: 'Computer Game',
                            path: 'computer-game',
                            isActive: true
                        }];
                }
                NavService.prototype.getNav = function () {
                    return this.navList;
                };
                NavService.prototype.setNav = function (itm) {
                    this.navList.push(itm);
                };
                NavService.prototype.getActiveNav = function () {
                    var activeNavIdx = this.navList.map(function (itm) { return itm.isActive === true; }).indexOf(true);
                    if (activeNavIdx >= 0) {
                        return {
                            element: this.navList[activeNavIdx],
                            index: activeNavIdx
                        };
                    }
                    else {
                        this.navList[0].isActive = true;
                        return {
                            element: this.navList[0],
                            index: 0
                        };
                    }
                    ;
                };
                return NavService;
            }());
            exports_1("NavService", NavService);
        }
    }
});
//# sourceMappingURL=nav.service.js.map
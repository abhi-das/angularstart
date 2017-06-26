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
                            path: 'home-decore'
                        }, {
                            name: 'Bath Products',
                            path: 'bath-product'
                        }, {
                            name: 'Computer Game',
                            path: 'computer-game'
                        }];
                }
                NavService.prototype.getNav = function () {
                    return this.navList;
                };
                NavService.prototype.setNav = function (itm) {
                    this.navList.push(itm);
                };
                return NavService;
            }());
            exports_1("NavService", NavService);
        }
    }
});
//# sourceMappingURL=nav.service.js.map
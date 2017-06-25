System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MenuListData;
    return {
        setters:[],
        execute: function() {
            MenuListData = (function () {
                function MenuListData() {
                    this.item = [{
                            name: 'Home Decore',
                            path: 'home-decore'
                        }, {
                            name: 'Bath Product',
                            path: 'bath-product'
                        }, {
                            name: 'Computer Games',
                            path: 'computer-game'
                        }];
                }
                MenuListData.prototype.getList = function () {
                    return this.item;
                };
                MenuListData.prototype.setMenuList = function (itm) {
                    this.item.push(itm);
                };
                return MenuListData;
            }());
            exports_1("MenuListData", MenuListData);
        }
    }
});
//# sourceMappingURL=menu.list.data.js.map
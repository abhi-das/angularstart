System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var locationListToken, empLocationList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("locationListToken", locationListToken = new core_1.OpaqueToken("locationListToken"));
            exports_1("empLocationList", empLocationList = {
                locations: ["New Jersy", "Nonolulu", "Germany", "Japan", "Sanfrancisco"]
            });
        }
    }
});
//# sourceMappingURL=providers.js.map
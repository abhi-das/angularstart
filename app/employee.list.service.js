System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeListService;
    return {
        setters:[],
        execute: function() {
            EmployeeListService = (function () {
                function EmployeeListService() {
                    this.empList = [{
                            name: "Sit officiadolore",
                            salary: "$ 8,000.00",
                            location: "New York",
                            role: "Manager II"
                        }, {
                            name: "Lorem ipsum",
                            salary: "$ 35,000.00",
                            location: "New York",
                            role: "Manager I"
                        }, {
                            name: "Nostrud exercitation",
                            salary: "$ 20,000.00",
                            location: "New York",
                            role: "Manager II"
                        }, {
                            name: "Ea duis non",
                            salary: "$ 15,000.00",
                            location: "New York",
                            role: "Manager II"
                        }, {
                            name: "Ad veniam",
                            salary: "$ 29,000.00",
                            location: "New York",
                            role: "Manager II"
                        }];
                }
                EmployeeListService.prototype.get = function () {
                    return this.empList;
                };
                EmployeeListService.prototype.set = function (emp) {
                    this.empList.push(emp);
                };
                EmployeeListService.prototype.delete = function (emp) {
                    var index = this.empList.indexOf(emp);
                    if (index >= 0) {
                        this.empList.splice(index, 1);
                    }
                };
                return EmployeeListService;
            }());
            exports_1("EmployeeListService", EmployeeListService);
        }
    }
});
//# sourceMappingURL=employee.list.service.js.map
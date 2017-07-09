System.register(['@angular/core', './time.child.component'], function(exports_1, context_1) {
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
    var core_1, time_child_component_1;
    var TimeParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (time_child_component_1_1) {
                time_child_component_1 = time_child_component_1_1;
            }],
        execute: function() {
            TimeParentComponent = (function () {
                function TimeParentComponent() {
                }
                TimeParentComponent.prototype.showChildInfo = function (count) {
                    this.timeChildComp.revealInfo(count);
                };
                __decorate([
                    core_1.ViewChild(time_child_component_1.TimeChildComponent), 
                    __metadata('design:type', time_child_component_1.TimeChildComponent)
                ], TimeParentComponent.prototype, "timeChildComp", void 0);
                TimeParentComponent = __decorate([
                    core_1.Component({
                        selector: 'time-parent',
                        templateUrl: './partials/time-parent.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimeParentComponent);
                return TimeParentComponent;
            }());
            exports_1("TimeParentComponent", TimeParentComponent);
        }
    }
});
//# sourceMappingURL=time.parent.component.js.map
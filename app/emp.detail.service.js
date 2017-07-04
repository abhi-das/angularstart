System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var EmpDetailService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EmpDetailService = (function () {
                function EmpDetailService() {
                    this.empDetails = [{
                            empNumber: '0002',
                            overview: "Eu mollit est deserunt reprehenderit non aliquip esse commodo velit labore dolor non in veniam labore adipisicing.",
                            bio: "A member of the affluent and influential Vanderbilt family, Gloria Vanderbilt was born into wealth on February 20, 1924, in New York City. Her father, Reginald Vanderbilt, was the great-grandson of Cornelius Vanderbilt, the creator of a railroad empire and one of America's first millionaires. Her mother, Gloria Morgan, was a young woman who loved parties more than parenthood. Gloria Vanderbilt lost her father, who suffered from alcoholism, to liver disease when she was a toddler, hence receiving a multi-million-dollar trust fund. For several years after her father's death, Gloria lived abroad with her mother and was often in the care of her maternal grandmother, Laura, and her nurse, Emma, nicknamed Dodo."
                        }, {
                            empNumber: '0003',
                            overview: "In aute sint nulla irure ea ad voluptate proident consequat velit labore eiusmod.",
                            bio: "Leonardo da Vinci was born on April 15, 1452, in a farmhouse nestled amid the undulating hills of Tuscany outside the village of Anchiano in present-day Italy. Born out of wedlock to respected Florentine notary Ser Piero and a young peasant woman named Caterina, he was raised by his father and his stepmothers. At the age of five, he moved to his father’s family estate in nearby Vinci, the Tuscan town from which the surname associated with Leonardo derives, and lived with his uncle and grandparents."
                        }, {
                            empNumber: '0004',
                            overview: "Quis mollit sunt dolor ullamco voluptate sed aliqua mollit irure.",
                            bio: "Keith Haring was born on May 4, 1958, in Reading, Pennsylvania. His parents, Allen and Joan Haring, raised Haring and his three sisters in Kutztown, Pennsylvania. As a child, Haring was fascinated by the cartoon art of Walt Disney and Charles Schultz and the illustrations of Dr. Seuss. He spent many hours drawing with his father, an engineer whose hobby was cartooning. After graduating from high school in 1976, Haring briefly attended the Ivy School of Professional Art in Pittsburgh, dropping out after two semesters. In 1978, he decided to return to school, moving to New York City to enroll at the School of Visual Arts."
                        }, {
                            empNumber: '0005',
                            overview: "Consectetur tempor laboris eu duis ea quis culpa consectetur dolor in incididunt sunt dolor velit ullamco sed mollit.",
                            bio: "Born in Switzerland in 1901, Alberto Giacometti received his early foundation in art from family members before pursuing formal training in Geneva and Paris. In the 1920s he began to develop his personal style, creating abstracted sculptures that showed the influence of Cubism and tribal art. During the 1930s he became a part of the Surrealist movement, with his work becoming more dreamlike in nature, but he later split with the group when he became focused on new ways to express the human form. Influenced by the emergence of Existentialism, his small, thin figurative sculptures resonated with the atmosphere of suffering that followed World War II, and they were soon highly sought after."
                        }];
                }
                EmpDetailService.prototype.getEmpDetail = function (id) {
                    return this.empDetails[id];
                };
                EmpDetailService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EmpDetailService);
                return EmpDetailService;
            }());
            exports_1("EmpDetailService", EmpDetailService);
        }
    }
});
//# sourceMappingURL=emp.detail.service.js.map
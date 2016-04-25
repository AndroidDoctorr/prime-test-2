System.register(['angular2/core'], function(exports_1, context_1) {
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
    var CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarService = (function () {
                function CarService() {
                }
                //constructor(private http: Http) {}
                CarService.prototype.getCarsSmall = function () {
                    return [
                        { "brand": "VW", "year": 2012, "color": "White", "vin": "dsad231ff" },
                        { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                        { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                        { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                        { "brand": "Mercedes", "year": 1995, "color": "White", "vin": "hrtwy34" },
                        { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                        { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                        { "brand": "Jaguar", "year": 2013, "color": "White", "vin": "greg34" },
                        { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                        { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
                    ];
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CarService);
                return CarService;
            }());
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car.service.js.map
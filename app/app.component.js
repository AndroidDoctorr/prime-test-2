System.register(['angular2/core', 'primeng/primeng', './car.service'], function(exports_1, context_1) {
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
    var core_1, primeng_1, car_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(carService) {
                    this.carService = carService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
                    this.cols = [
                        { field: 'vin', header: 'Vin' },
                        { field: 'year', header: 'Year' },
                        { field: 'brand', header: 'Brand' },
                        { field: 'color', header: 'Color' }
                    ];
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [car_service_1.CarService],
                        directives: [primeng_1.DataTable],
                        template: "<h1>My First Angular 2 App</h1>\n    <p-dataTable [value]=\"cars\">\n        <p-column *ngFor=\"#col of cols\" [field]=\"col.field\" [header]=\"col.header\"></p-column>\n    </p-dataTable>\n    "
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
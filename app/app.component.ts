import {Component, OnInit} from 'angular2/core';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {CarService} from './car.service';
import {Car} from './car';

@Component({
    selector: 'my-app',
    providers: [CarService],
    directives: [DataTable],
    template: `<h1>My First Angular 2 App</h1>
    <p-dataTable [value]="cars">
        <p-column *ngFor="#col of cols" [field]="col.field" [header]="col.header"></p-column>
    </p-dataTable>
    `
})
export class AppComponent implements OnInit {

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
}

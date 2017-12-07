import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: [{ name: string, year: number }] = [
    {name: 'Ford', year: 2015, id: 1},
    {name: 'Audi', year: 2010, id: 3},
    {name: 'Toyota', year: 2012, id: 4},
    {name: 'BMw', year: 2017, id: 6},
    {name: 'Mustang', year: 2012, id: 8},
    {name: 'Lada', year: 2015, id: 10},
    {name: 'Bently', year: 2014 id: 14}
  ];

  constructor() {
    // console.log('constructor');
  }

  // updateCarList(car: { name: string, year: number }) {
  //   this.cars.push(car);
  // }
  //
  // ngOnInit() {
  //   console.log('ngOnInit');
  // }
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes);
  // }
  //
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }

}

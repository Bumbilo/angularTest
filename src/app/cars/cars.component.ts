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
    {name: 'Ford', year: 2015},
    {name: 'Audi', year: 2010},
    {name: 'Toyota', year: 2012},
    {name: 'BMw', year: 2017},
    {name: 'Mustang', year: 2012},
    {name: 'Lada', year: 2015},
    {name: 'Bently', year: 2014}
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

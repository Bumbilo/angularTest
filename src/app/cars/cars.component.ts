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

  cars: [{ name: string, year: number, color: string, id: number }] = [
    {name: 'Ford', year: 2015, id: 1, color: 'red'},
    {name: 'Audi', year: 2010, id: 3, color: 'red'},
    {name: 'Toyota', year: 2012, id: 4, color: 'red'},
    {name: 'BMw', year: 2017, id: 6, color: 'red'},
    {name: 'Mustang', year: 2012, id: 8, color: 'red'},
    {name: 'Lada', year: 2015, id: 10, color: 'red'},
    {name: 'Bently', year: 2014, id: 14, color: 'red'}
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

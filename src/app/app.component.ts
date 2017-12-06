import {Component, Input} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  isSold: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  cars: Cars[] = [];
  carName = '';
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'tomato',
    'yellow',
    'grey'
  ];

  constructor(private service: CarsService) {
  }

  loadCars() {
    this.service
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      });
  }

  addCars() {
    this.service
      .addCar(this.carName)
      .subscribe((car: Cars) => this.cars.push(car));

    this.carName = '';
  }

  // Method for generate random color from array colors
  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  // Method for add new random color for car
  setNewColor(car: Cars) {
    this.service
      .changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

  // Method for remove car
  deleteCar(car: Cars) {
    this.service
      .deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(item => item.id !== car.id);
      });
  }
}

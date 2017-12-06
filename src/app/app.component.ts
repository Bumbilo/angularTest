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

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.service
      .changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

}

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

}

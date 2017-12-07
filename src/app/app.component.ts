import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';
import {ActivatedRoute, Router} from '@angular/router';

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

export class AppComponent implements OnInit {

  cars: Cars[] = [];
  carName = '';
  appTitle = '';
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'tomato',
    'yellow',
    'grey'
  ];

  constructor(private service: CarsService, private _router: Router, private _route: ActivatedRoute) {
  }

  // Method for get all cars from cars array
  loadCars() {
    this.service
      .getCars()
      .subscribe(
        (cars: Cars[]) => this.cars = cars,
        (error) => alert(error)
      );
  }

  // Method for add new car in cars array
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

  // Method redirect
  openCarsPage() {
    this._router.navigate(['/forms'], {relativeTo: this._route });
  }

  ngOnInit() {
    // Get title App from server
    this.appTitle = this.service.getTitle();
  }
}

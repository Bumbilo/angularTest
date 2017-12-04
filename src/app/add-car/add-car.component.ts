import {Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  // @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor(private service: CarsService) {
  }

  ngOnInit() {
  }

  carName = '';

  addCar() {
    console.log(this.service)
    this.service.addCar(this.carName);
    this.carName = '';
  }


}

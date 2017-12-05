import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {

  constructor(private consoleService: ConsoleService) {

  }

  cars = [
    {
      name: 'Lada',
      isSold: false,
    },
    {
      name: 'Porshe',
      isSold: true,
    },
    {
      name: 'BMW',
      isSold: false,
    },
    {
      name: 'Mustang',
      isSold: false,
    },
    {
      name: 'Brabus',
      isSold: false,
    },
    {
      name: 'Tesla',
      isSold: false,
    }
  ];

  addCar(name: string) {
    this.cars.push({name, isSold: false});
    this.consoleService.log(`Car ${name} was added !!!`);
  }
}

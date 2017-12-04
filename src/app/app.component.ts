import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCar = '';
  title = 'Создание директивы !!!';

  title2 = 'WebForMySelf';

  pi = Math.PI;

  money = 350;

  date = new Date();

  amount = 0.45;

  obj = {
    first_name: 'Dima',
    last_name: 'Holiak',
    nested: {
      birthday: new Date(),
      eyesColor: 'brown'
    }
  };

  cars = [
    {
      name: 'Lada',
      descr: 'lorem',
      year: 2012,
    },
    {
      name: 'Porshe',
      descr: '123',
      year: 2012,
    },
    {
      name: 'BMW',
      descr: '1234124124',
      year: 2012,
    },
    {
      name: 'Mustang',
      descr: 'ABCDC',
      year: 2012,
    },
    {
      name: 'Brabus',
      descr: 'lkjlkasjdfasd1234',
      year: 2012,
    },
    {
      name: 'Tesla',
      descr: 'asldkgjas2342',
      year: 2012,
    }
  ];

  addCar() {
    this.cars.push({
      name: 'new car',
      descr: 'WFM'
    });
  }

  asyncTitle = Observable.of('Async titile 3seconds')
    .delay(3000)

  items = [1, 2, 3, 4, 5];

  current = 1;

  onClick(item: number) {
    this.current = item;
  }




}

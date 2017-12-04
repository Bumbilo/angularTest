import {Component} from '@angular/core';

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
    {name: 'Lada'},
    {name: 'Porshe'},
    {name: 'BMW'},
    {name: 'Mustang'},
    {name: 'Brabus'},
    {name: 'Tesla'}
  ];

  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(item: number) {
    this.current = item;
  }



}

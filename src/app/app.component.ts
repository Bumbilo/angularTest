import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  pow = 2;

  items = [1, 2, 3, 4, 5];
  current = 1;

  searchCar = '';

  cars: [{ name: string, year: number }] = [
    {name: 'Ford', year: 2015},
    {name: 'Audi', year: 2010},
    {name: 'Toyota', year: 2012},
    {name: 'BMw', year: 2017},
    {name: 'Mustang', year: 2012},
    {name: 'Lada', year: 2015},
    {name: 'Bently', year: 2014}
  ];

  onClick(item: number) {
   this.current = item;
  }
}

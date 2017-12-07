import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarsService {
  constructor(private http: Http) {
  }

  // Method for get all cars
  getCars() {
    const header = new Headers({
      'Content-Type': 'application/json; charset=utf8'
    });

    return this.http
      .get('http://localhost:3000/cars', {
        headers: header
      })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw('Sever don`t response');
      });
  }

  // Method for add one car in array cars
  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue',
    };

    return this.http
      .post('http://localhost:3000/cars', data)
      .map((response: Response) => response.json());
  }

  // Method for change color in current id car
  changeColor(car: any, color: string) {
    car.color = color;
    return this.http
      .put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => response.json());
  }

  // Method for remove car from base
  deleteCar(car: any) {
    return this.http
      .delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => response.json());
  }

  getTitle() {
    return this.http.get('http://localhost:3000/title')
      .delay(3000)
      .map((response: Response) => response.json())
      .map((data) => data.value);
  }

}

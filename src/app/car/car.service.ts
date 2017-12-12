import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class CarService {
  private _isVisible = true;

  showCar() {
    this._isVisible = true;
  }

  hideCar() {
    this._isVisible = false;
  }

  getVisibility() {
    return this._isVisible;
  }

  getCarName(): Observable<string> {
    return Observable.of('Ford').delay(100);
  }

}

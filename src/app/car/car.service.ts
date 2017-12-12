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

}

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from './car.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let carService: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    carService = fixture.debugElement.injector.get(CarService);
  });

  // Test component should created
  it('Should crate component instance', () => {
    expect(component).toBeTruthy();
  });

  // Test component should have title My car header
  it(`Should render h1 tag with title "My car header"`, () => {
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const text = nativeElement.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

  // Test service in car component
  it('It should inject car service', () => {
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  // Test service method showCar()
  it(`Should display car if is visible`, () => {
    carService.showCar();
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const text = nativeElement.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  // Test service method hideCar()
  it(`Shouldn't display car if isn't visible`, () => {
    carService.hideCar();
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const text = nativeElement.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });

  // Test method getCarName should be async else equal undefined
  it(`Shouldn't get car name isn't async`, () => {
    spyOn(carService, 'getCarName').and.returnValue(Observable.of('testCar').delay(100));
    fixture.detectChanges();
    expect(component.carName).toBe(undefined);
  });

  // Test method getCarName should be unasync
  it(`Should get car name is async`, async(() => {
    spyOn(carService, 'getCarName').and.returnValue(Observable.of('testCar').delay(100));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.carName).toEqual('testCar');
    });
  }));

});

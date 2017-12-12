import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from './car.service';

describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
  });

  // Test component should created
  it('should crate component instance', () => {
    expect(component).toBeTruthy();
  });

  // Test component should have title My car header
  it(`should render h1 tag with title "My car header"`, () => {
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const text = nativeElement.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

  // Test service in car component
  it('It should inject car service', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  // Test service method showCar()
  it(`Should display car if is visible`, () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.showCar();
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const text = nativeElement.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  // Test service method hideCar()
  it(`Shouldn't display car if isn't visible`, () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.hideCar();
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const text = nativeElement.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });

});

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CarPageComponent} from '../car-page/car-page.component';
import {CarsComponent} from '../cars/cars.component';
import {CarsService} from '../cars.service';
import {CarsRoutingModule} from '../car-page/cars-routing.module';
import {AddCarComponent} from './add-car.component';

@NgModule({
  declarations: [
    CarPageComponent,
    CarsComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    CarsRoutingModule,
    AddCarComponent
  ],
  providers: [CarsService],
})
export class CarsModule {

}

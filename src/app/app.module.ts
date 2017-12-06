import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from './directive/background.directive';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { PowPipePipe } from './pow-pipe.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import { CarsService } from './cars.service';
import {ConsoleService} from './console.service';
import { FomrsComponent } from './fomrs/fomrs.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    MyDirectiveDirective,
    PowPipePipe,
    CarFilterPipe,
    FomrsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CarsService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {}


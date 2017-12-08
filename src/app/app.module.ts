import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {AddCarComponent} from './add-car/add-car.component';
import {BackgroundDirective} from './directive/background.directive';
import {MyDirectiveDirective} from './directive/my-directive.directive';
import {PowPipePipe} from './pow-pipe.pipe';
import {CarFilterPipe} from './car-filter.pipe';
import {ConsoleService} from './console.service';
import {FomrsComponent} from './fomrs/fomrs.component';
import {HttpModule} from '@angular/http';
import {AppRouterModule} from './app-router/app-router.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {CarsModule} from './add-car/app-car.module';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BackgroundDirective,
    MyDirectiveDirective,
    PowPipePipe,
    CarFilterPipe,
    FomrsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouterModule,
    CarsModule
  ],
  providers: [ConsoleService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}


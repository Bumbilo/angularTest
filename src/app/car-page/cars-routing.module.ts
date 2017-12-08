import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from '../cars/cars.component';
import {AuthGuard} from '../auth-guard.service';
import {CarPageComponent} from './car-page.component';

const carsRoutes: Routes = [
  {path: 'cars', component: CarsComponent, canActivate: [AuthGuard], children: [{path: ':id/:name', component: CarPageComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule],
})

export class CarsRoutingModule {

}

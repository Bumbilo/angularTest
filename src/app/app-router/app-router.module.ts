import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from '../cars/cars.component';
import {FomrsComponent} from '../fomrs/fomrs.component';
import {CarPageComponent} from '../car-page/car-page.component';

const appRoutes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'cars', component: CarsComponent, children: [
      {path: ':id/:name', component: CarPageComponent}
    ]},
  {path: 'forms', component: FomrsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}

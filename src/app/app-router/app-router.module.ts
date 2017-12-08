import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from '../cars/cars.component';
import {FomrsComponent} from '../fomrs/fomrs.component';
import {CarPageComponent} from '../car-page/car-page.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AuthGuard} from '../auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'forms', component: FomrsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
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

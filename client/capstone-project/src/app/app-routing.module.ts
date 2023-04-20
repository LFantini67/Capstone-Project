import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { CityComponent } from './components/city/city.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { InterestComponent } from './components/interest/interest.component';
import { EnjoyComponent } from './components/enjoy/enjoy.component';
import { CitiesComponent } from './components/cities/cities.component';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'city',
    component: CityComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RestaurantDetailComponent }  from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'detail/:id', component: RestaurantDetailComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

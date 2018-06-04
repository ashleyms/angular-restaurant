import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

//   getRestaurants(): Restaurant[] {
//   return RESTAURANTS;
// }


  getRestaurants(): Observable<Restaurant[]> {
    return of(RESTAURANTS);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return of(RESTAURANTS.find(restaurant => restaurant.id === id));
  }

  constructor() { }
}

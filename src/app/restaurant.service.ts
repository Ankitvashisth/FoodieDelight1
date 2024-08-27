import { Injectable } from '@angular/core';
import { Restaurant } from './interface/Restaurant';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }


  private restaurants: Restaurant[] = [
    { id: 1, name: ' Default Restaurant', description: 'Great food!', location: 'Pune',rating: 4 },
    { id: 2, name: 'Restaurant 2', description: 'Cozy place!', location: 'Mumbai',rating:3 },
  ];

  private restaurantsSubject = new BehaviorSubject<Restaurant[]>(this.restaurants);
  restaurants$: Observable<Restaurant[]> = this.restaurantsSubject.asObservable();

  getRestaurants(): Observable<Restaurant[]> {
    return this.restaurants$;
  }

  getRestaurantById(id:number){
    let res=this.restaurants.filter(r=>r.id==id);
    return of(res);
  }

  addRestaurant(restaurant: Restaurant) {
    const newRestaurant = { ...restaurant, id: this.restaurants.length + 1 };
    this.restaurants.push(newRestaurant);
    this.restaurantsSubject.next(this.restaurants); // Emit the updated list
    return of(newRestaurant);
  }

  updateRestaurant(id: number, updatedRestaurant: Restaurant) {
    const index = this.restaurants.findIndex(r => r.id === id);
    if (index !== -1) {
      this.restaurants[index] = { ...updatedRestaurant, id };
      this.restaurantsSubject.next(this.restaurants); // Emit the updated list
    }
    return of(this.restaurants[index]);

  }

  deleteRestaurant(id: number){
    this.restaurants = this.restaurants.filter(r => r.id !== id);
    this.restaurantsSubject.next(this.restaurants); // Emit the updated list
    return of(this.restaurants);
  }

}

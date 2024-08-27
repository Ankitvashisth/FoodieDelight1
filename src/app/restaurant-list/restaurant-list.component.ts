import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../interface/Restaurant';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [AsyncPipe,CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit {
/**
 *
 */
RestaurantsDetails$!:Observable<Restaurant[]>;
constructor(private restaurantService:RestaurantService,private router:Router) {
  
}
  
ngOnInit(): void {
    this.getRestaurants();
}
getRestaurants(){
  this.RestaurantsDetails$= this.restaurantService.getRestaurants();
}
trackById(index: number, item: Restaurant): number {
  return item.id;
}

onEdit(id:number){
this.router.navigate(["/edit",id]);
}
onDelete(id:number){
  const res=confirm('Are you sure you want to delete this item?');
  if(res){
    this.restaurantService.deleteRestaurant(id).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
}

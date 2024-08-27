import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../interface/Restaurant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './restaurant-edit.component.html',
  styleUrl: './restaurant-edit.component.css'
})
export class RestaurantEditComponent implements OnInit {
  editRestaurantForm!: FormGroup;
  restaurantId!: number;
  isFormSubmitted:boolean=false;
  submitted:boolean=false;
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router:Router
  ) {}
  async ngOnInit() {
    this.initializeForm();

    // Get the restaurant id from the URL (if it exists)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.restaurantId = +id;
        this.loadRestaurant(this.restaurantId);
      }
    });
  }

  initializeForm() {
    this.editRestaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      rating: ['',[Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  async loadRestaurant(id: number) {
     await this.restaurantService.getRestaurantById(id).subscribe((restaurant:any)=>{
      console.log(restaurant);
      if (restaurant) {
        this.editRestaurantForm.patchValue({
          name: restaurant[0].name,
          description: restaurant[0].description,
          location: restaurant[0].location,
          rating: restaurant[0].rating
        });
      }
    });
   
  }
  canDeactivate(): boolean {
    if (this.editRestaurantForm.dirty && !this.isFormSubmitted) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
 
  onSubmit() {
    this.submitted=true;
    if (this.editRestaurantForm.valid) {
      if (this.restaurantId) {
        this.restaurantService.updateRestaurant(this.restaurantId, this.editRestaurantForm.value).subscribe((res:any)=>{
          this.isFormSubmitted=true;
        this.router.navigate(['/']);
        });
      } 
    }
  }
}

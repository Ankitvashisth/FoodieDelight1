import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Restaurant } from '../interface/Restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './restaurant-add.component.html',
  styleUrl: './restaurant-add.component.css',
  
})
export class RestaurantAddComponent implements OnInit {
  /**
   *
   */
  addRestaurantForm!:FormGroup;
  isFormSubmitted:boolean=false;
  constructor(public fb:FormBuilder,public restaurantService:RestaurantService,public router:Router) {
    
  }
 async ngOnInit() {
  this.intializeForm();
   
 }
 intializeForm(){
  this.addRestaurantForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    location: ['', Validators.required],
    rating: ['',[Validators.required, Validators.min(1), Validators.max(5)]]
  })
 }
 canDeactivate(): boolean {
  if (this.addRestaurantForm.dirty && !this.isFormSubmitted) {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
}
 onSubmit(){
   this.restaurantService.addRestaurant(this.addRestaurantForm.value).subscribe((res:any)=>{
    this.addRestaurantForm.reset();
    this.router.navigate(['/']);
   })
 }
}

import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { canDeactivateFormGuard } from './can-deactivate-form.guard';

export const routes: Routes = [
    { path: '', component: RestaurantListComponent },
    { path: 'add', component: RestaurantAddComponent,canDeactivate: [canDeactivateFormGuard] },
    { path: 'edit/:id', component: RestaurantEditComponent,canDeactivate: [canDeactivateFormGuard] }
];

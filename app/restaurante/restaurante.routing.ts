import { Routes, RouterModule } from '@angular/router';

import { RestaurantesComponent } from './restaurante.component';
import { RestauranteFormComponent } from './restaurante-form/restaurante-form.component';

const restaurantesRoutes: Routes = [
    { path: 'restaurantes', component: RestaurantesComponent, pathMatch: 'full' },
    { path: 'restaurantes/new', component: RestauranteFormComponent },
    { path: 'restaurantes/:id', component: RestauranteFormComponent }
];

export const restaurantesRouting = RouterModule.forChild(restaurantesRoutes);
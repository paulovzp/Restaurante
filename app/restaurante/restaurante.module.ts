import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { RestaurantesComponent } from './restaurante.component';
import { RestaurantesService } from './shared/restaurante.service';
import { RestauranteFormComponent } from './restaurante-form/restaurante-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        RestaurantesComponent,
        RestauranteFormComponent
    ],
    exports: [
        RestaurantesComponent
    ],
    providers: [
        RestaurantesService
    ]
})
export class RestaurantesModule { }
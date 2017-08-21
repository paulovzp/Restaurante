import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { restaurantesRouting } from './restaurante/restaurante.routing';
import { RestaurantesModule } from './restaurante/restaurante.module';
import { pratosRouting } from './prato/prato.routing';
import { PratosModule } from './prato/prato.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        restaurantesRouting,
        RestaurantesModule,
        pratosRouting,
        PratosModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

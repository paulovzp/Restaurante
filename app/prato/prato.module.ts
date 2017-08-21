import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PratosComponent } from './prato.component';
import { PratosService } from './shared/prato.service';
import { PratoFormComponent } from './prato-form/prato-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        PratosComponent,
        PratoFormComponent
    ],
    exports: [
        PratosComponent
    ],
    providers: [
        PratosService
    ]
})
export class PratosModule { }
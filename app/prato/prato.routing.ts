import { Routes, RouterModule } from '@angular/router';

import { PratosComponent } from './prato.component';
import { PratoFormComponent } from './prato-form/prato-form.component';

const pratosRoutes: Routes = [
    { path: 'pratos', component: PratosComponent, pathMatch: 'full' },
    { path: 'pratos/new', component: PratoFormComponent },
    { path: 'pratos/:id', component: PratoFormComponent }
];

export const pratosRouting = RouterModule.forChild(pratosRoutes);
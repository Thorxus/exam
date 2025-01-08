import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'register', component: RegistrationComponent}
];

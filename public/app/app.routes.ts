import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { RegisterComponent } from './register.component/register.component';
import { ProfileComponent } from './profile.component/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { AppComponent }             from './app.component';
import { LoginComponent }           from './login.component/login.component';
import { RegisterComponent }        from './register.component/register.component';
import { ProfileComponent }         from './profile.component/profile.component';
import { HomeComponent }            from './home.component/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent }
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

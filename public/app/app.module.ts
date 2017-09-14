import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { RegisterComponent } from './register.component/register.component';
import { ProfileComponent } from './profile.component/profile.component';
import { routing } from './app.routes';

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ AppComponent, LoginComponent, RegisterComponent, ProfileComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
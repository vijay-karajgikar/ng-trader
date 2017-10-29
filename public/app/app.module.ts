import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { FormsModule }                  from '@angular/forms';
import { AppComponent }                 from './app.component';
import { LoginComponent }               from './login.component/login.component';
import { RegisterComponent }            from './register.component/register.component';
import { ProfileComponent }             from './profile.component/profile.component';
import { HomeComponent }                from './home.component/home.component';
import { AppRouting }                      from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}

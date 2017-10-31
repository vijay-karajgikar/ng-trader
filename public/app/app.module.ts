import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { HttpClientModule }                     from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { AppComponent }                         from './app.component';
import { LoginComponent }                       from './login.component/login.component';
import { RegisterComponent }                    from './register.component/register.component';
import { ProfileComponent }                     from './profile.component/profile.component';
import { HomeComponent }                        from './home.component/home.component';
import { AppRouting }                           from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
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

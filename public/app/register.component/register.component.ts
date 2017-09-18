import { Component }    from '@angular/core';
import { User }         from '../models/User';

@Component({
    selector: 'register',
    templateUrl: './app/register.component/register.component.html'
})

export class RegisterComponent {

    user: User;

    onSubmit(user: User) {
        this.user = user;

    }    
}

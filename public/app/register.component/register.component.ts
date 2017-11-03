import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User }         from '../models/User';


@Component({
    selector: 'register',
    templateUrl: './app/register.component/register.component.html',
    styleUrls: [ './app/register.component/register.component.css' ]
})

export class RegisterComponent implements OnInit {

    userForm: FormGroup;
    httpClient: HttpClient;
    showMessage: Boolean;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    //Initialize the Form
    ngOnInit() {
        this.userForm = new FormGroup({
            firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
            email: new FormControl('', [Validators.required, Validators.minLength(10)]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
            address: new FormControl(''),
            age: new FormControl(''),
            website: new FormControl('')
        });
    }



}

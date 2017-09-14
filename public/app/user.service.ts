import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private jsonp: Jsonp) {

    }
    private userUrl = 'http://localhost:1368/users';

    findUsers(user: string) {

    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { REST } from './REST';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService extends REST implements CanActivate{

    constructor(http: Http) {
      super(http);
    }

    login(email: string, senha: string) {
        return this.gethttp().post(super.getURL('/login', false), {email: email,password: senha}, super.jwt()).map(
          (response: Response) => {
            let resp = response.json();
            localStorage.setItem('token', resp.token);
            localStorage.setItem('currentUser', JSON.stringify(resp.user));
            return resp;
          }
        );      
    }

    canActivate() {
        return 'token' in localStorage;
      }

    getProfile(){
        return this.getURL('/profile');
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }


}

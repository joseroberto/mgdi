import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { REST } from './REST';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService extends REST implements CanActivate{

    constructor(private http: Http) {
      super();
    }

    login(email: string, senha: string) {
        return this.http.post(super.getURL('/login'), {email: email,password: senha}, super.jwt()).map(
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
        return this.http.get(super.getURL('/profile'), super.jwt()).map((response: Response) => response.json());
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }


}

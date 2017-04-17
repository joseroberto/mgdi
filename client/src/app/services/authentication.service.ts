import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';

import { REST } from './REST';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService extends REST implements CanActivate {

    token: string='';

    constructor(private http: Http, private router:Router) {
      super();
    }

    canActivate() {
         if (localStorage.getItem('token')) {
             return true;
         }

         // not logged in so redirect to login page
         this.router.navigate(['/login']);
         return false;
    }

    login(email: string, senha: string) {
        return this.http.post(super.getURL('/login'), {email: email,password: senha}, super.jwt()).map(
          (response: Response) => {
            let resp = response.json();
            localStorage.setItem('currentUser', JSON.stringify(resp.user));
            localStorage.setItem('token', resp.token);
            this.token = resp.token;
            return resp;
          }
        );
    }



    getProfile(){
        return this.http.get(super.getURL('/profile'), super.jwt()).map((response: Response) => response.json());
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }


}

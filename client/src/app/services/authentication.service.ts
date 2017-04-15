import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { REST } from './REST';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService extends REST{

    constructor(private http: Http) {
      super();
    }

    login(email: string, senha: string) {
        return this.http.post(super.getURL('/login'), {email: email,password: senha}, super.jwt()).map(
          (response: Response) => response.json()
        );
    }

    getProfile(){
        return this.http.get(super.getURL('/profile'), super.jwt()).map((response: Response) => response.json());
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


}

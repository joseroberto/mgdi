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
      if(environment.production){
            return this.gethttp().post(super.getURL('/login', false), {email: email,password: senha}, super.jwt()).map(
              (response: Response) => {
                let resp = response.json();
                localStorage.setItem('token', resp.token);
                localStorage.setItem('currentUser', JSON.stringify(resp.user));
                return resp;
              }
            );
        }else{
          return Observable.interval(1000).map( v=>{
            let resp = {token:'APXXPTO', user:{
                      cpf: '11111111111',
                      nome: 'usuario fake',
                      email: 'usuario@teste.com',
                      perfis: ['USR']
                  }};
            localStorage.setItem('token', resp.token);
            localStorage.setItem('currentUser', JSON.stringify(resp.user));
            return resp;
                });
        }
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

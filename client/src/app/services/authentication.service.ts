import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../shared/user/user.service';
import { AclService } from '../services/acl.service';
import { REST } from './REST';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService extends REST implements CanActivate{

    constructor(  http: Http, 
                  private userService: UserService, 
                  private cookieService: CookieService,
                  private aclService: AclService

      ) {
      super(http);
    }

    login(usuario: string, senha: string) {
        return this.gethttp().post(super.getURL('/login', false),
          {username: usuario, password: senha, aplicacao: environment.aplicacao}, super.jwt()).map(
          (response: Response) => {
            let resp = response.json();
            localStorage.setItem('token', resp.token);
            //this.userService.announceUserChange(resp.user);
            let user = resp.user;
            user['apelido'] = this.label(resp.user.nome);
            user['picture'] = 'assets/img/avatars/male.png';
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            if('acl' in resp){
              localStorage.setItem('acl', JSON.stringify(resp.acl));
              this.aclService.setRules(resp.acl, resp.user.Perfil.sigla )  //TODO: Validar para um perfil retornado ok, existe ainda a propriedade sigla
            }
            //localStorage.setItem('currentUser', JSON.stringify(resp.user));
            return resp;
          }
        );
    }

    label(nome:string){
      return nome.split(' ')[0];
    }

    canActivate() {

        return 'token' in localStorage;
      }

    getProfile(){
        return this.getURL('/profile');
    }

    logout() {
        this.cookieService.delete('token');
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('acl');
    }


}

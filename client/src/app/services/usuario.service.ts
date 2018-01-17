import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class UsuarioService extends REST {
  constructor(http:Http) {
    super(http);
  }
  getAll(){
    return this.get('/user');
  }
  createSolicitacao(perfil){
    return this.post('/user', perfil);
  }
  getPorSituacao(codigo:number){
    return this.get(`/user?situacao=${codigo}`);
  }


}

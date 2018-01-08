import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class UsuarioService extends REST {
  constructor(http:Http) {
    super(http);
  }
  getAll(){
    return this.get('/user-mgi');
  }
  createSolicitacao(perfil){
    return this.post('/user-mgi', perfil);
  }


}

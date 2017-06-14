import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class UnidadeService extends REST {
  constructor(http:Http) {
    super(http);
  }
  getAll(){
    return this.get('/unidade');
  }

  getUnidade(codigo:number){
    return this.get(`/unidade/${codigo}`);
  }
}

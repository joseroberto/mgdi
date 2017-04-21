import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class IndicadorService extends REST {
  constructor(http:Http) {
    super(http);
  }
  _getAll(){
    return this.get('/indicador');
  }

  get(codigo:string){
    return this.get(`/indicador/${codigo}`);
  }

  create(indicador:any){
    return this.post('/indicador', indicador);
  }

  update(codigo:string, indicador:any){
    return this.put(`/indicador/${codigo}`, indicador);
  }

  erase(codigo:string){
    return this.delete(`/indicador/${codigo}`);
  }
}

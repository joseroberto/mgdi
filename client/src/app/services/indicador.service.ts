import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class IndicadorService extends REST {
  constructor(http:Http) {
    super(http);
  }
  _getAll(){
    return super.get('/indicador');
  }

  get(codigo:string){
    return super.get(`/indicador/${codigo}`);
  }

  create(indicador:any){
    return super.post('/indicador', indicador);
  }

  update(indicador:any){
    return super.put(`/indicador/${indicador.codigo}`, indicador);
  }

  delete(codigo:string){
    return super.delete(`/indicador/${codigo}`);
  }
}

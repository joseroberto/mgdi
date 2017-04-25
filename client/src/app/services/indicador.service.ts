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

  updateConceituacao(codigo:string, conceituacao:string){
    return super.patch(`/indicador/${codigo}/conceituacao`,{conceituacao: conceituacao});
  }

  updateInterpretacao(codigo:string, interpretacao:string){
    return super.patch(`/indicador/${codigo}/interpretacao`,{interpretacao: interpretacao});
  }

  updateUso(codigo:string, uso:string){
    return super.patch(`/indicador/${codigo}/uso`,{uso: uso});
  }

  updateLimitacao(codigo:string, limitacao:string){
    return super.patch(`/indicador/${codigo}/limitacao`,{limitacao: limitacao});
  }

  updateNota(codigo:string, nota:string){
    return super.patch(`/indicador/${codigo}/nota`,{nota: nota});
  }

  updateObservacao(codigo:string, observacao:string){
    return super.patch(`/indicador/${codigo}/observacao`,{observacao: observacao});
  }
}

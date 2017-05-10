import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class IndicadorService extends REST {
  constructor(http:Http) {
    super(http);
  }

  getAll(){
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

  updateUso(codigo:string, usos:string){
    return super.patch(`/indicador/${codigo}/uso`,{usos: usos});
  }

  updateLimitacao(codigo:string, limitacoes:string){
    return super.patch(`/indicador/${codigo}/limitacao`,{limitacoes: limitacoes});
  }

  updateNota(codigo:string, notas:string){
    return super.patch(`/indicador/${codigo}/nota`,{notas: notas});
  }

  updateObservacao(codigo:string, observacoes:string){
    return super.patch(`/indicador/${codigo}/observacao`,{observacoes: observacoes});
  }

  updateMetodoCalculo(codigo:string, metodo_calculo:string){
    return super.patch(`/indicador/${codigo}/metodo_calculo`,{metodo_calculo: metodo_calculo});
  }

  updateFonteDados(codigo:string, fonte_dados:string){
    return super.patch(`/indicador/${codigo}/fonte_dados`,{fonte_dados: fonte_dados});
  }

  adicionaIndicadorRelacionado(codigo_pai:string, codigo:string){
    return super.patch(`/indicador/${codigo_pai}/indicador_relacionado/${codigo}`,'');
  }

  deleteIndicadorRelacionado(codigo_pai:string, codigo:string){
    return super.delete(`/indicador/${codigo_pai}/indicador_relacionado/${codigo}`);
  }
}

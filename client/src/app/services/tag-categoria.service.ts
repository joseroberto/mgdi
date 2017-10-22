import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class TagCategoriaService extends REST {
  constructor(http:Http) {
    super(http);
  }
  getAll(){
    return this.get('/tag-categoria');
  }
  apaga(codigo:string){
    return super.delete(`/tag-categoria/${codigo}`);
  }
}

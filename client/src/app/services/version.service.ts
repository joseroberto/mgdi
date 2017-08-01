import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST } from './REST';

@Injectable()
export class VersionService extends REST {
  constructor(http:Http) {
    super(http);
  }
  getVersion(){
    return this.get('/version');
  }
}

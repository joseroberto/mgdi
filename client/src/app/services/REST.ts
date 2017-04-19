import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';

export class REST{

  constructor(private http: Http){
  }

  protected getURL(url){
    return `${environment.url}${url}`;
  }

  protected get(path:string){
    return this.http.get(this.getURL(path), this.jwt()).map(
      (response: Response) => response.json());
  }

  protected gethttp(){
      return this.http;
  }

  protected jwt() {
      // create authorization header with jwt token
      //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json' );

      //if (currentUser && currentUser.token) {
          //headers.append('Authorization', 'Bearer ' + currentUser.access_token);
      //}

      return new RequestOptions({ headers: headers });
  }
}

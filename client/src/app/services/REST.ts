import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';

export class REST{

  constructor(){
  }

  protected getURL(url){
    return `${environment.url}/${environment.context}${url}`;
  }

  protected jwt() {
      // create authorization header with jwt token
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json' );

      if (currentUser && currentUser.token) {
          //headers.append('Authorization', 'Bearer ' + currentUser.access_token);
      }

      return new RequestOptions({ headers: headers });
  }
}

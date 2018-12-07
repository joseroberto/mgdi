import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import _ from 'lodash'
import { REST } from './REST';
import { environment } from '../../environments/environment';
var acl = require("../../../../server/api/helpers/acl-module/index.js");


@Injectable()
export class AclService extends REST {
  private role:string;

  constructor(http:Http) {
    super(http); 
    let acl = JSON.parse(localStorage.getItem('acl'));
    let role = _.get(JSON.parse(localStorage.getItem('currentUser')),'Perfil.sigla','guest');
    this.setRules(acl,role)

    //update with last rules
    this.get('/acl-rules').subscribe(resp=>{
      localStorage.setItem('acl', JSON.stringify(resp.acl_rules));
      this.setRules(acl, role)
    });
    
  }
  
  getAll(){
    return this.get('/acl-rules');
  }
  
  public setRules(acl_rules, role){
     acl.config({
        baseUrl: '',
        rules:acl_rules,
    });
    this.role = role
  }

  getPermission(route,method){

    let options = acl.getConfig();
    const policy = options.policies.get(this.role);

    let access = acl.checkACL(this.role, route, method)
    return access;

  }
}

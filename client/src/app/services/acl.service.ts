import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import _ from 'lodash'
import { REST } from './REST';
import { environment } from '../../environments/environment';
var acl = require("../../../../server/api/helpers/acl-module/index.js");


@Injectable()
export class AclService extends REST {
  private role:string;
  private userUnidadeCod:string;
  private userUnidadesPath;

  constructor(http:Http) {

    super(http); 
    let acl = JSON.parse(localStorage.getItem('acl'));
    let role = _.get(JSON.parse(localStorage.getItem('currentUser')),'Perfil.sigla','guest');
    this.userUnidadesPath =  JSON.parse(localStorage.getItem('acl_unidades'));
    this.userUnidadeCod = _.get(JSON.parse(localStorage.getItem('currentUser')),'UnidadeCodigo',false);
    this.setRules(acl,role)

    //update with last rules
    this.get('/acl-rules').subscribe(resp=>{
      localStorage.setItem('acl', JSON.stringify(resp.acl_rules));
      localStorage.setItem('acl_unidades', JSON.stringify(resp.unidades));
      this.userUnidadesPath = resp.unidades
      this.setRules(acl, role )
    });
    
  }
  
  getAll(){
    return this.get('/acl-rules');
  }
  
  public setRules(acl_rules, role ){
     acl.config({
        baseUrl: '',
        rules:acl_rules,
    });
    this.role = role
  }

  getPermission(route,method, unidadeCod = 0){

    let options = acl.getConfig();
    const policy = options.policies.get(this.role);
    let access = acl.checkACL(this.role, route, method);

    if(this.role == "ADM")
        return access;

    //check if in $area, if it is, check permission for it
    if(unidadeCod){
        if( this.userUnidadesPath.includes( unidadeCod ) ){
            //make
            return true;
        }else{
            return false;
        }
    }

    return access;

  }
}

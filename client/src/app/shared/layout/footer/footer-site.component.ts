import { Component, OnInit } from '@angular/core';
import {config} from '../../smartadmin.config';
import { VersionService } from '../../../services/index';

@Component({
  selector: 'sa-footer-site',
  templateUrl: './footer-site.component.html'
})
export class FooterSiteComponent implements OnInit {
  private versionClient:string;
  private versionServer:string;
  private enviroment:string;
  private title: string;
  private titleServer: string;

  constructor(private versionService:VersionService) {}

  ngOnInit() {
    this.versionClient = config.version;
    this.title = config.title;
    this.versionService.getVersion().subscribe(resp=>{
        this.versionServer = resp.version;
        this.titleServer = resp.title;
        this.enviroment = resp.enviroment;
    });
  }

}

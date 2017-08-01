import { Component, OnInit } from '@angular/core';
import {config} from '../../smartadmin.config';
import { VersionService } from '../../../services/index';

@Component({
  selector: 'sa-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  private versionClient:string;
  private versionServer:string;
  private title: string;

  constructor(private versionService:VersionService) {}

  ngOnInit() {
    this.versionClient = config.version;
    this.versionService.getVersion().subscribe(resp=>{
        this.versionServer = resp.version;
        this.title = resp.title;
    });
  }

}

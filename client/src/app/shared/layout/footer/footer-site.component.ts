import { Component, OnInit } from '@angular/core';
import {config} from '../../smartadmin.config';

@Component({
  selector: 'sa-footer-site',
  templateUrl: './footer-site.component.html'
})
export class FooterSiteComponent implements OnInit {
  version:string;
  constructor() {}

  ngOnInit() {
    this.version = config.version;
  }

}

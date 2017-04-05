import { Component, OnInit } from '@angular/core';
import {config} from '../../smartadmin.config';

@Component({
  selector: 'sa-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  version:string;

  constructor() {}

  ngOnInit() {
    this.version = config.version;
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {ViewChild} from "@angular/core/src/metadata/di";
import {config} from '../../smartadmin.config';

@Component({
  selector: 'sa-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  version:string;
  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }
  constructor() {}

  ngOnInit() {
    this.version = config.version;
  }

}

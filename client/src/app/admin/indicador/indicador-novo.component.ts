import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './indicador-novo.component.html',
})
export class IndicadorNovoComponent implements OnInit {
  private currenttab = 't1';

  constructor() {}

  ngOnInit() {
  }

}

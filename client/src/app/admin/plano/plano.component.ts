import {Component, OnInit, Input} from '@angular/core';
import {JsonApiService} from "../../core/api/json-api.service";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@Component({
  templateUrl: 'plano.component.html',
})
export class PlanoComponent implements OnInit {
  @Input() task:string
  @Input() week:string
  @Input() day:string

  public days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'];


  public demo1:any;
  public demo2:any;

  constructor(private jsonApiService:JsonApiService) {
  }

  add() {
    console.log(this.task, this.day)
  }

  ngOnInit() {
    this.jsonApiService.fetch('/ui-examples/planos.json').subscribe(data=> {
      this.demo1 = data.demo1;
    })
  }

  changeLstener(payload) {
    console.log('change payload', payload)
  }
}

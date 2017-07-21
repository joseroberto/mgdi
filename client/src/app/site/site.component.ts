import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../shared/animations/fade-in-top.decorator";
import { IndicadorService, UtilService } from '../services/index';

@FadeInTop()
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
})
export class SiteComponent implements OnInit {
  private listaIndicadores:any[];
  private page: number =1;
  private total: number = 0;
  private itensPorPagina: number = 20;

  getPage(page: number) {
    this.loadIndicador(page);
  }

  constructor(private indicadorService:IndicadorService) { }

  ngOnInit() {
    this.pageChanged(1);
  }

  pageChanged(pagina:number){
    this.loadIndicador(pagina);
  }

  loadIndicador(pagina:number){
    this.page = pagina;
    var offset = (pagina-1) * this.itensPorPagina;

    this.indicadorService.getAll(this.itensPorPagina, offset).subscribe(resp=>{
        console.log(resp)
        this.total = resp.count;
        this.listaIndicadores=resp.rows;
    });
  }

  barColorsDemo(row, series, type) {
    if (type === 'bar') {
      var red = Math.ceil(150 * row.y / 8);
      return 'rgb(' + red + ',0,0)';
    } else {
      return '#000';
    }
  }

  percentageFormat(x) {
    return x + "%"
  }

  dateFormat(d) {
    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
  }

  getData(){
    return [{"x":"2011 Q1","y":0},{"x":"2011 Q2","y":1},{"x":"2011 Q3","y":2},{"x":"2011 Q4","y":3},{"x":"2012 Q1","y":4},{"x":"2012 Q2","y":5},{"x":"2012 Q3","y":6},{"x":"2012 Q4","y":7},{"x":"2013 Q1","y":8}];
  }

  getData2(){
    return [{"x":"2011 Q1","y":3,"z":2,"a":3},{"x":"2011 Q2","y":2,"z":null,"a":1},{"x":"2011 Q3","y":0,"z":2,"a":4},{"x":"2011 Q4","y":2,"z":4,"a":3}];
  }

  getData3(){
    return [{"period":"2012-10-01","licensed":3407,"sorned":660},{"period":"2012-09-30","licensed":3351,"sorned":629},{"period":"2012-09-29","licensed":3269,"sorned":618},{"period":"2012-09-20","licensed":3246,"sorned":661},{"period":"2012-09-19","licensed":3257,"sorned":667},{"period":"2012-09-18","licensed":3248,"sorned":627},{"period":"2012-09-17","licensed":3171,"sorned":660},{"period":"2012-09-16","licensed":3171,"sorned":676},{"period":"2012-09-15","licensed":3201,"sorned":656},{"period":"2012-09-10","licensed":3215,"sorned":622}];
  }

  getData4(){
    return [{"value":70,"label":"AM"},{"value":15,"label":"RO"},{"value":10,"label":"RR"},{"value":5,"label":"Outros"}];
  }
}

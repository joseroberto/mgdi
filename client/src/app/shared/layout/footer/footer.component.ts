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
  private enviroment:string;
  private title: string;
  private ultimo_login: string;

  constructor(private versionService:VersionService) {}

  ngOnInit() {
    this.versionClient = config.version;
    this.versionService.getVersion().subscribe(resp=>{
        this.versionServer = resp.version;
        this.title = resp.title;
        this.enviroment = resp.enviroment;
    });

    let user = localStorage.getItem('currentUser');
    if (user){
      let item_user = JSON.parse(user);
      this.ultimo_login = this.timeConversion(new Date().getTime() - new Date(item_user.ultimo_login).getTime());
    }
  }

  timeConversion(millisec) {
      let seconds = (millisec / 1000);
      let minutes = (millisec / (1000 * 60));
      let hours = (millisec / (1000 * 60 * 60));
      let days = (millisec / (1000 * 60 * 60 * 24));

      if (seconds < 60) {
          return seconds.toFixed(0) + " Seg";
      } else if (minutes < 60) {
          return minutes.toFixed(0) + " Min";
      } else if (hours < 24) {
          return hours.toFixed(0) + " Hrs";
      } else {
          return days.toFixed(0) + " Dias"
      }
    }

}

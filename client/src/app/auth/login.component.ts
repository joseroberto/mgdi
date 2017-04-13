import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    console.log('Login', this.model);
    this.auth.login(this.model.email, this.model.senha).subscribe( resp =>{
      console.log(resp);
      this.router.navigate(['/admin']);
    });

  }

}

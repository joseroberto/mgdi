import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;

  constructor(private route: ActivatedRoute,
      private router: Router,
      private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }

  login(event){
    event.preventDefault();
    this.router.navigate(['/admin'])
  }

}

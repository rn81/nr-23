import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

    constructor (
      public authenticationService: AuthenticationService,
      public authService: AuthService, public router : Router ) {}
 
  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('normas');
    }, 5000);
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

    constructor (public authService: AuthService, public router : Router ) {}
 
  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('normas');
    }, 400000);
  }
}
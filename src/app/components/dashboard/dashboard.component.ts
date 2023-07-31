import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  router: any;

    constructor (public authService: AuthService ) {}
 
  ngOnInit() {
    setTimeout(()=>{
      this.router.navigateByUrl('normas');
    },5000);
  }
}



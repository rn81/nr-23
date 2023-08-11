import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash2',
  templateUrl: './splash2.component.html',
  styleUrls: ['./splash2.component.scss'],
})
export class Splash2Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigateByUrl('sign-in');
    },5000);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.component.html',
  styleUrls: ['./normas.component.scss'],
})
export class NormasComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {}

}

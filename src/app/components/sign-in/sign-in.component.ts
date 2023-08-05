import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public angularfirestorage: AngularFireStorage,
    public authenticationService: AuthenticationService,
    ) {}

  ngOnInit() {}
  
}



import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.component.html',
  styleUrls: ['./normas.component.scss'],
})
export class NormasComponent implements OnInit {

  constructor(public authService: AuthService,
    public angularfirestorage: AngularFireStorage,
    public authenticationService: AuthenticationService,

  ) { }

  ngOnInit() { }

}

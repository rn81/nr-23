import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { SplashComponent } from './components/splash/splash.component';

import { NrsComponent } from './components/nrs/nrs.component';

import { Nr01Component } from './components/nrs/nr01/nr01.component';
import { Nr02Component } from './components/nrs/nr02/nr02.component';
import { Nr03Component } from './components/nrs/nr03/nr03.component';
import { Nr04Component } from './components/nrs/nr04/nr04.component';
import { Nr05Component } from './components/nrs/nr05/nr05.component';
import { Nr06Component } from './components/nrs/nr06/nr06.component';
import { Nr07Component } from './components/nrs/nr07/nr07.component';


// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';

// Auth service
import { AuthenticationService} from "./shared/services/authentication.service";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SplashComponent,
    NrsComponent,
    Nr01Component,  
    Nr02Component,  
    Nr03Component,     
    Nr04Component,
    Nr05Component,
    Nr06Component,
    Nr07Component,    
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase,'Master'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,    
  ],
  
  providers: [AuthService, AuthenticationService, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],

})

export class AppModule {}


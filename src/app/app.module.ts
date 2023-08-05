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

import { NormasComponent } from './components/normas/normas.component';

import { SplashComponent } from './components/splash/splash.component';

import { NrsComponent } from './components/nrs/nrs.component';
// nr's
import { Nr01Component } from './components/nrs/nr01/nr01.component';
import { Nr02Component } from './components/nrs/nr02/nr02.component';
import { Nr03Component } from './components/nrs/nr03/nr03.component';
import { Nr04Component } from './components/nrs/nr04/nr04.component';
import { Nr05Component } from './components/nrs/nr05/nr05.component';
import { Nr06Component } from './components/nrs/nr06/nr06.component';
import { Nr07Component } from './components/nrs/nr07/nr07.component';
import { Nr08Component } from './components/nrs/nr08/nr08.component';
import { Nr09Component } from './components/nrs/nr09/nr09.component';
import { Nr10Component } from './components/nrs/nr10/nr10.component';
import { Nr11Component } from './components/nrs/nr11/nr11.component';
import { Nr12Component } from './components/nrs/nr12/nr12.component';
import { Nr13Component } from './components/nrs/nr13/nr13.component';
import { Nr14Component } from './components/nrs/nr14/nr14.component';
import { Nr15Component } from './components/nrs/nr15/nr15.component';
import { Nr16Component } from './components/nrs/nr16/nr16.component';
import { Nr17Component } from './components/nrs/nr17/nr17.component';
import { Nr18Component } from './components/nrs/nr18/nr18.component';
import { Nr19Component } from './components/nrs/nr19/nr19.component';
import { Nr20Component } from './components/nrs/nr20/nr20.component';


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
    NormasComponent,
    NrsComponent,
    Nr01Component,  
    Nr02Component,  
    Nr03Component,
    Nr04Component,      
    Nr05Component, 
    Nr06Component, 
    Nr07Component, 
    Nr08Component, 
    Nr09Component, 
    Nr10Component, 
    Nr11Component,
    Nr12Component,
    Nr13Component,
    Nr14Component,
    Nr15Component,
    Nr16Component,
    Nr17Component,
    Nr18Component,
    Nr19Component,
    Nr20Component,

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


import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { SplashComponent } from './components/splash/splash.component';

import { NormasComponent } from './components/normas/normas.component';

import { NrsComponent } from './components/nrs/nrs.component';

import { Nr01Component } from './components/nrs/nr01/nr01.component';
import { Nr02Component } from './components/nrs/nr02/nr02.component';
import { Nr03Component } from './components/nrs/nr03/nr03.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  //{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'splash', component: SplashComponent},
  { path: 'normas', component: NormasComponent},
  { path: 'nrs', component: NrsComponent},
  { path: 'nr01', component: Nr01Component},
  { path: 'nr02', component: Nr02Component},
  { path: 'nr03', component: Nr03Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { SplashComponent } from './components/splash/splash.component';

import { NrsComponent } from './components/nrs/nrs.component';
//nr's//
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

   { path: 'nrs', component: NrsComponent},

  { path: 'nr01', component: Nr01Component},
  { path: 'nr02', component: Nr02Component},
  { path: 'nr03', component: Nr03Component},
  { path: 'nr04', component: Nr04Component},
  { path: 'nr05', component: Nr05Component},
  { path: 'nr06', component: Nr06Component},
  { path: 'nr07', component: Nr07Component},
  { path: 'nr08', component: Nr08Component},
  { path: 'nr09', component: Nr09Component},
  { path: 'nr10', component: Nr10Component},
  { path: 'nr11', component: Nr11Component},
  { path: 'nr12', component: Nr12Component},
  { path: 'nr13', component: Nr13Component},
  { path: 'nr14', component: Nr14Component},
  { path: 'nr15', component: Nr15Component},
  { path: 'nr16', component: Nr16Component},
  { path: 'nr17', component: Nr17Component},
  { path: 'nr18', component: Nr18Component},
  { path: 'nr19', component: Nr19Component},
  { path: 'nr20', component: Nr20Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserComponent } from './user/user.component';
import { SoldeComponent } from './solde/solde.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { DemandeComponent } from './demande/demande.component';
import { loginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component: loginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
 
  { path: 'user',
    component: UserComponent},
  { path: 'demande',
    component: DemandeComponent},
  { path: 'solde',
    component: SoldeComponent},
  { path: 'consultation',
    component: ConsultationComponent},
 { path: 'password',
    component: PasswordFormComponent},


  {
    path: '**',
    redirectTo: 'login'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}

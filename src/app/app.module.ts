import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DemandeComponent } from './demande/demande.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationComponent } from './consultation/consultation.component';
import { SoldeComponent } from './solde/solde.component';
import { UserComponent } from './user/user.component';
import { CongeComponent } from './conge/conge.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { loginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    NgbModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule

    
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    DemandeComponent,
    PasswordFormComponent,
    ConsultationComponent,
    SoldeComponent,
    UserComponent,
    CongeComponent,
    loginComponent
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

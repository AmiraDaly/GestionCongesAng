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
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { DemandeComponent } from './demande/demande.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationComponent } from './consultation/consultation.component';
import { SoldeComponent } from './solde/solde.component';
import { UserComponent } from './user/user.component';
import { CongeComponent } from './conge/conge.component';


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
    NgbModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    DemandeComponent,
    PasswordFormComponent,
    ConsultationComponent,
    SoldeComponent,
    UserComponent,
    CongeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

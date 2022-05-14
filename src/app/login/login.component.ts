import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from "../services/token-storage.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)

    }
  )
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {


  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(credentials: any) {
     this.authService.login(credentials).subscribe({
       next: data => {
         this.tokenStorage.saveToken(data.token);
         this.tokenStorage.saveUser(data);
         this.isLoggedIn = true;
         this.roles = this.tokenStorage.getUser().roles;
         this.router.navigate(['/home']);
         window.location.reload();

       },
       error: err => {
         this.errorMessage = err.error.message;
       }
     });
  }
}

function next(next: any, arg1: (reponse: any) => void) {
  throw new Error('Function not implemented.');
}

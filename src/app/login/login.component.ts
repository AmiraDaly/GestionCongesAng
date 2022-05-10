import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new  FormControl('',[Validators.required, Validators.email]),
    password :new  FormControl('',Validators.required)

  }

  )
 
  

  constructor(
    private authService :AuthService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.get('email');
}
  get password(){
  return this.loginForm.get('password');
}
login(credentials: any){
  console.log(credentials);
  this.authService.login(credentials).subscribe(
      (reponse)=>{
      const token ='test' //reponse.id; 
      const link=['Home'];
      localStorage.setItem('token',token);
      this.router.navigate(link);  
    }
  ) ;
}
}

function next(next: any, arg1: (reponse: any) => void) {
  throw new Error('Function not implemented.');
}


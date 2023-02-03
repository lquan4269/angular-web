import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userFrom!: FormGroup;

  constructor(private authService: AuthService, private FormBuilder: FormBuilder) { 
    this.userFrom = this.FormBuilder.group(
      {
        email: this.FormBuilder.control(''),
        password: this.FormBuilder.control('', [Validators.required, Validators.minLength(3)]),
        confirmpassword: this.FormBuilder.control('',  [Validators.required, Validators.minLength(3)]),
      }
      
    );
  }

  ngOnInit(): void {
  }

  tryGoogleLogin(){
    this.authService.signinGmail().then(  res =>{
      location.href="/main";
    })
  }
  onSubmit(){		
    console.log("on submit login");
    console.log('email',this.userFrom.controls['email'].value)
    console.log('password',this.userFrom.controls['password'].value)
    this.authService.signin(this.userFrom.controls['email'].value, this.userFrom.controls['password'].value).then(res=>{
      console.log(res);
      location.href="main"
    },
    err=>{
      console.log(err);
    })
  
  }

}

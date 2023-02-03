import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User: any;
  userFrom!: FormGroup;


  constructor(private AuthService:AuthService,private FormBuilder: FormBuilder) { 

    this.userFrom = this.FormBuilder.group(
      {
        email: this.FormBuilder.control(''),
        password: this.FormBuilder.control('', [Validators.required, Validators.minLength(3)]),
        confirmpassword: this.FormBuilder.control('',  [Validators.required, Validators.minLength(3)]),
      }
      
    );
  }

  ngOnInit() {
    
  }
  onSubmit() {
    if (this.userFrom.invalid) {
      console.log("invalid");
      return;
    }
    console.log('email',this.userFrom.controls['email'].value)
    console.log('password',this.userFrom.controls['password'].value)

  

    this.AuthService.signup(
      this.userFrom.controls['email'].value,
      this.userFrom.controls['password'].value
    ).then((res) => {
      console.log(res);
      
    },err=>{{
      console.log("loi ")
    }})
    console.log('Register is Success!');
  //  location.href = 'login';
  }


}

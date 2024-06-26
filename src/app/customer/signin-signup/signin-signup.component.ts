import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignupService } from 'src/app/shared/services/login-signup.service';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit{

  regForm=false;

  SignUpForm:FormGroup;
  loginForm:FormGroup;

  signUpSubmitted=false;

  href:string='';

  user_reg_data;

  constructor(private formBuilder:FormBuilder,private router:Router,private loginService:LoginSignupService){

  }

  ngOnInit(): void {
    
    this.href=this.router.url;

    if(this.href=='/sign-in')this.regForm=false;
    else if(this.href=='/sign-up')this.regForm=true;
    

    this.SignUpForm=this.formBuilder.group({
      name:['',Validators.required],
      mobNumber:['',Validators.required],
      age:['',Validators.required],
      dob:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      addLine1:['',Validators.required],
      addLine2:[],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required],
      language:['',Validators.required],
      gender:['',Validators.required],
      aboutYou:['',Validators.required],
      uploadPhoto:['',Validators.required],
      agreetc:['',Validators.required],
      role:['',Validators.required],
    })


  }



  onSubmitSignUp()
  {
    this.signUpSubmitted=true;
    if(this.SignUpForm.invalid)
      {
        // return ;
      }

      this.user_reg_data=this.SignUpForm.value;

      this.loginService.userRegister(this.user_reg_data).subscribe(data=>
        {
          alert("User Registered Successfully ");
          this.router.navigate(['/sign-in']);
    
        }
      );
      
     
  }





}

import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginUser } from '../../Model/app.security.model';
import { SecurityInfraService } from '../httpservice/security-infra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit{
  loginForm!: FormGroup;
  requred:string="";
  authUser: LoginUser;
  message : string;

  //extra field
  userEmail: string="";
  userPass: string="";

  constructor(private formBuilder: FormBuilder,private serv:SecurityInfraService,private router: Router) {
    this.authUser = new LoginUser('','');
    this.message = "";
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser(): void{
    this.authUser.Email = this.userEmail;
    console.log(this.authUser.Email);
    this.authUser.Password = this.userPass;
    console.log(this.authUser.Password);
    this.serv.authenticateUser(this.authUser).subscribe({
      next:(response) => {
        sessionStorage.setItem('token', response.Token);
        sessionStorage.setItem('role', response.Role);
        this.message = response.Message;
      },
      error:(err)=>{
        this.message = `Error Occurred ${JSON.stringify(err)}`;
        console.log(this.message);
      }
    })
    this.router.navigate(['']);
  }

  logout():void{
    this.serv.logoutUser().subscribe({
      next:(response) => {
        this.message = response.Message;
      },
      error:(err)=>{
        this.message = `Error Occurred ${JSON.stringify(err)}`;
        console.log(this.message);
      }
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {

    }
  }
}


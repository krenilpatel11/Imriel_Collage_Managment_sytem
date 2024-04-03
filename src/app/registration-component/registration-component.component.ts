import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppUser } from '../../Model/app.security.model';
import { SecurityInfraService } from '../httpservice/security-infra.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-component',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './registration-component.component.html',
  styleUrl: './registration-component.component.css'
})
export class RegistrationComponentComponent implements OnInit {

  registerForm!: FormGroup;
  requred:string="";
  newUser: AppUser;
  message:string;

  //extra field for registration
  newUserEmail:string="";
  newUserPass:string="";
  cnfNewUserPass:string="";
  userRole:string="";

  constructor(private formBuilder: FormBuilder,private serv: SecurityInfraService,private router: Router) {
    this.newUser = new AppUser('' ,'','','');
    this.message = "";
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]],
      RoleInfo: ['', [Validators.required]],
    });
  }

  CreateNewUser():void{
    this.newUser.Email = this.newUserEmail;
    this.newUser.Password = this.newUserPass;
    this.newUser.ConfirmPassword= this.cnfNewUserPass;
    this.newUser.Role = this.userRole;
    if (this.newUserPass !== this.cnfNewUserPass) {
      this.message = 'Passwords do not match.';
      return;
    }
    this.serv.registerUser(this.newUser).subscribe({
      next: (response)=>{
        // Save the token in Broser's Session Storage
        this.message = response.Message;
        this.router.navigate(['/login']);
      },
      error:(err)=>{
        this.message = `Error Occurred ${JSON.stringify(err)}`;
      }
    })

  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {

    }
  }
}

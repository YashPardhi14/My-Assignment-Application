import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
 validEmail='ma@gmail.com';
 validPass='123';
 hide = true;

 constructor(private routes: Router ){};

  logInForm =new FormGroup(
    {
      email:new FormControl('',),
      password:new FormControl(''),


    }  
  )
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {

   
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  userLogIn(){
     if(this.logInForm.value.email===this.validEmail && this.logInForm.value.password===this.validPass){
console.log("succes");
this.routes.navigate(['/home']);

     }else{
console.log('Failed....');

     } 
  }

}

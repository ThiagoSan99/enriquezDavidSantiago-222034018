import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule, CommonModule], //Modulos requeridos para el trabajo con formularios
  templateUrl: './login-test.component.html',
  styleUrl: './login-test.component.css'
})
export class LoginTestComponent {
  userForm : FormGroup;
  

  constructor( private fb: FormBuilder){

      this.userForm = this.fb.group({
      usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }else{
      console.log('Formulario invalido');
    }
  }
}

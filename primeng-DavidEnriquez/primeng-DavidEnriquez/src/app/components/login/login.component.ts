import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card, CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;
  

  constructor( private fb: FormBuilder){

      this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }else{
      console.log('Formulario invalido');
    }
  }
}

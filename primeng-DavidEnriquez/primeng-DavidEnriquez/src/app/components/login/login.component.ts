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

  loginForm = this.fb.group({
    usuario: ['', [Validators.required, Validators.name]],
    contraseña: ['', [Validators.required, Validators.name]]
  });

constructor(fb: FormBuilder){}
}

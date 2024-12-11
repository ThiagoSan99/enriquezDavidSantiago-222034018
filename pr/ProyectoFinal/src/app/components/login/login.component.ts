import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() user!: FormGroup;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router){
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }
  redirigir() {
    const validUser = 'admin';
    const validPassword = 'admin';
    

    if (this.username === validUser && this.password === validPassword) {
      console.log('HOlaaa')
      // Redirigir al dashboard o página principal
      this.router.navigate(['/menu']);
    } else {
      // Mostrar mensaje de error
      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }
}

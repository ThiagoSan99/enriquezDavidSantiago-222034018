import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormularioPlantilla1Component } from './formularios/formulario-plantilla1/formulario-plantilla1.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,FormularioPlantilla1Component,LoginComponent, ReactiveFormsModule, PasswordModule, LoginTestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng-DavidEnriquez';
}

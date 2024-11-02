
import { DetailsComponent } from './components/details/details.component';
import { ManagerComponent } from './components/manager/manager.component';
import { InformationComponent } from './components/information/information.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DetailsComponent,ManagerComponent,InformationComponent,RouterOutlet,ButtonModule, ReactiveFormsModule,
    CommonModule,InputTextModule, CalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value: string = ''; 
  user: string = '';
  manForm: FormGroup;
  inForm: FormGroup;
  prinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prinForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
    });
    this.manForm = this.fb.group({
      nameboss: ['', Validators.required],
      emailboss: ['', Validators.required, Validators.email],
    })
    this.inForm = this.fb.group({
      startdate: ['', Validators.required],
      finaldate: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.prinForm.valid && this.manForm.valid && this.inForm.valid) {
      console.log("Form Inicial:", this.prinForm.value);
      console.log("Form Gerente:", this.manForm.value);
      console.log("Form Información:", this.inForm.value); //Habilita la navegacion, debe activarse en el constructor
    } else {
      console.log('Formulario no valido');
    }
  }
}

import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Form1Component } from '../form1/form1.component';
import { Form2Component } from '../form2/form2.component';
import { Form3Component } from '../form3/form3.component';
import { RegisterService } from '../../services/register.service';
import { HttpClient } from '@angular/common/http';
import {response} from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,CommonModule,Form1Component,Form2Component,Form3Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  
  constructor(private fb: FormBuilder, private registerService: RegisterService){
    this.form1 = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.form2 = this.fb.group({
      nameg: ['', Validators.required],
      emailg: ['',[Validators.required, Validators.email]]
    });
    this.form3 = this.fb.group({
      startdate: ['',Validators.required],
      finaldate: ['',Validators.required],
      text: ['',Validators.required]
    });
  }
  onSubmit() {

    const {name,lastname,email,phone} = this.form1.value;
    const {nameg,emailg} = this.form2.value;
    const {startdate,finaldate,text} = this.form3.value;

    this.registerService.Registrar(name,lastname,email,phone,nameg,emailg,startdate,finaldate,text).subscribe({
      next: (response) => {
        console.log("Información enviada Exitosamente", response);
      },
      error: error =>{
        console.log("Error al enviar información", error);
      },
      complete:() => {
        console.log("Envío de información completado");
      },
    })
  }
}

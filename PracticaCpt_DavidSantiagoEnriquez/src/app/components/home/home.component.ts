import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Form1Component } from '../form1/form1.component';
import { Form2Component } from '../form2/form2.component';
import { Form3Component } from '../form3/form3.component';

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
  
  constructor(private fb: FormBuilder){
    this.form1 = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.form2 = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]]
    });
    this.form3 = this.fb.group({
      startdate: ['',Validators.required],
      finaldate: ['',Validators.required],
      text: ['',Validators.required]
    });
  }
  onSubmit() {
    if(this.form1.valid && this.form2.valid && this.form3.valid){
      console.log("Form Principal:", this.form1.value);
      console.log("Form Gerente:", this.form2.value);
      console.log("Form Licencia:", this.form3.value);
    }else{
      console.log('Formulario Invalido')
    }
  }
}

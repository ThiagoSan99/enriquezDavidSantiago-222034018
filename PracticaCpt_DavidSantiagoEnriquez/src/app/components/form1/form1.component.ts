import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
    @Input() form1: FormGroup;

    constructor(private fb: FormBuilder){
      this.form1 = this.fb.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['',[Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
      })
    }
}

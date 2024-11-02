import { Component, Input } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, ButtonModule, CommonModule,InputTextModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
    @Input() form2: FormGroup;

    constructor(private fb: FormBuilder) {
      this.form2 = this.fb.group({
        nameboss: ['', Validators.required],
        email: ['', Validators.required]
      });
    }
}

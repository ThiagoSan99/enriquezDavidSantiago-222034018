import { Component, Input } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, ButtonModule, CommonModule,InputTextModule, InputTextareaModule, InputGroupModule,InputGroupAddonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  @Input() form3:FormGroup

  constructor(private fb: FormBuilder) {
    this.form3 = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      startdate: ['', Validators.required],
      finaldate: ['', Validators.required],
      text: ['',Validators.required]
    });
  }
}

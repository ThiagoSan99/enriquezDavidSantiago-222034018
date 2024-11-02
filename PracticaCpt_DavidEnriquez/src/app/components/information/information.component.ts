import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, InputTextModule, CalendarModule,InputTextareaModule, InputGroupModule,InputGroupAddonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @Input() inForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inForm = this.fb.group({
      startdate: ['', Validators.required],
      finaldate: ['', Validators.required]
    });
  }

}

import { Component, Input } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, ButtonModule, CommonModule,InputTextModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  @Input() manForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.manForm = this.fb.group({
      nameboss: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}

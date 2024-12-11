import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ManageProductsService } from '../../service/manage-products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule,CalendarModule,ReactiveFormsModule,ButtonModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Input() form1: FormGroup;

  constructor(private fb: FormBuilder, private producService: ManageProductsService){
    this.form1 = this.fb.group({
      comercialname: ['', Validators.required],
      genericname: ['', Validators.required],
      quantity: ['',[Validators.required]],
      lote: ['', [Validators.required]],
      price: ['', Validators.required],
      description: ['', Validators.required],
      pharmaceuticform: ['',[Validators.required]],
      cum: ['', [Validators.required]],
      finaldate: ['', Validators.required]

    })
  }
  onSubmit(){
    if (this.form1.valid){
      const {comercialname,genericname,quantity,lote,price,description,pharmaceuticform,cum,finaldate} = this.form1.value;
      this.producService.Agregar(comercialname, genericname, String(quantity), lote, String(price), description, pharmaceuticform, cum, finaldate).subscribe({
        next: (response) => {
          console.log("Medicamento actualizado exitosamente", response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu producto ha sido agregado",
            showConfirmButton: false,
            heightAuto: false,
            timer: 1500
          });
          this.form1.reset();
        },
        error: (error) => {
          console.error("Error al actualizar el medicamento: ", error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un problema al actualizar el medicamento",
            text: "Por favor, intenta nuevamente.",
            heightAuto: false,
            showConfirmButton: true
          });
        },
        complete: () => {
          console.log("Proceso de agregar medicamento completado");
        }
      });
    } else {
      console.log('Formulario invalido')
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Formulario invalido",
        text: "Por favor, intenta nuevamente.",
        heightAuto: false,
        showConfirmButton: true
      });
    }
  }
}
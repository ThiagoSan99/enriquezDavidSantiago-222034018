import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { ManageProductsService } from '../../service/manage-products.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule,CalendarModule,ReactiveFormsModule,ButtonModule, RouterModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  @Input() formUpdate: FormGroup;
  productId!: string;

  constructor(private fb: FormBuilder, private producService: ManageProductsService, private route: ActivatedRoute, private router: Router){
    this.formUpdate = this.fb.group({
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
  onUpdate(): void {
    this.productId = String(this.route.snapshot.paramMap.get('id'));
    if (this.formUpdate.valid){
      const {comercialname,genericname,quantity,lote,price,description,pharmaceuticform,cum,finaldate} = this.formUpdate.value;
      this.producService.updateProduct(this.productId, comercialname, genericname, String(quantity), lote, String(price), description, pharmaceuticform, cum, finaldate).subscribe({
        next: (response) => {
          console.log("Medicamento actualizado exitosamente", response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tus datos han sido actualizados",
            showConfirmButton: false,
            heightAuto: false,
            timer: 1500
          });
          this.formUpdate.reset();
          this.router.navigate(['/management'])
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
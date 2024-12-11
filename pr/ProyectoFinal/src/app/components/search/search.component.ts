import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageProductsService } from '../../service/manage-products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  products: any[] = []; // Almacena los usuarios filtrados.
  productId: string = ''; // ID ingresado por el usuario.
  productName: string = ''; // Name ingresado por el usuario.
  errorMessage: string = '';
  errorMessageName: string = '';

  constructor(private serachService: ManageProductsService) { }

  // Método para buscar usuarios por ID
  searchProductById(): void {
    if (!this.productId) {
      this.errorMessage = 'Por favor, ingresa un ID';
      return;
    } else {
      this.errorMessage = ''
    }
    this.serachService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.products = product ? [product] : [];
        if (this.products.length == 0 ) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "No se encontró ningún usuario con este ID.",
            text: "Por favor, intenta nuevamente.",
            showConfirmButton: true,
            heightAuto: false
          });
        }
      },
      error: () => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ID no encontrado",
          text: "Por favor, intenta nuevamente.",
          showConfirmButton: true,
          heightAuto: false
        });
      },
      complete: () => {
        console.log('Proceso de busqueda terminado')
      },
    });
  }
  
  searchProductByName(): void {
    if (!this.productName) {
      this.errorMessageName = 'Por favor digite palabra clave';
      return;
    } else {
      this.errorMessage = ''
    }
    this.serachService.getProductByName(this.productName).subscribe({
      next: (product) => {
        this.products = product;
        if (this.products.length == 0 ) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Producto no encontrado",
            text: "Por favor, intenta nuevamente.",
            showConfirmButton: true,
            heightAuto: false,
            customClass: {
              container: 'swal-container',  // Clase personalizada para el contenedor
            }
          });
        }
      },
      error: () => {
        this.errorMessageName = 'Error al buscar el usuario.';
      },
      complete: () => {
        console.log('Proceso de busqueda terminado')
      },
    });
  }
}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { ManageProductsService } from '../../service/manage-products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [TableModule, ButtonModule, HttpClientModule, CommonModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  products: any[] = []; // Almacena los productos
  errorMessage: string = '';

  constructor(private producService: ManageProductsService, private router: Router){
    this.loadProducts(); // Cuando se carga la pagina se ejecuta el metodo loadProdcuts
  }
  loadProducts(): void {
    this.producService.getProtucts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: () => {
        this.errorMessage = 'Error al cargar los usuarios'
      }
    });
  }
  update(id: number){
    this.router.navigate(['/update', id])
  }
  Delete(id: number){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esta acción!',
      icon: 'warning',
      showCancelButton: true,
      heightAuto: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.producService.deleteProduct(id).subscribe({
          next: (response) => {
            console.log('Producto eliminado exitosamente:', response);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "El producto ha sido eliminado",
              showConfirmButton: false,
              heightAuto: false,
              timer: 1500
            });
            this.loadProducts();
          },
          error: (error) => {
            console.error('Error al eliminar el producto:', error);
            Swal.fire({
              position: "center", icon: "error", title: "Error al eliminar el producto",heightAuto: false, text: "Por favor intenta nuevamente.",
              showConfirmButton: true
            });
          },
          complete: () => {
            console.log('Petición de eliminación completada');
            
          }
        })
      }
    })
  }
}

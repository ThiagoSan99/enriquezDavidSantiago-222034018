import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ManageProductsService } from '../../service/manage-products.service';

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [TableModule, ButtonModule, HttpClientModule, CommonModule],
  templateUrl: './database.component.html',
  styleUrl: './database.component.css'
})
export class DatabaseComponent {
  products: any[] = []; // Almacena los productos
  errorMessage: string = '';

  constructor(private producService: ManageProductsService){
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
}
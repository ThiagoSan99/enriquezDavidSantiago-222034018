import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {
  apiUrl='http://localhost:5240/api/Product'
  constructor(private http: HttpClient) { }
    // defino metodo que va enviar
    Agregar(comercialName: string, genericName: string, quantity: string, lote: string, price: string, description: string, pharmaceuticForm: string, cum: string, finalDate: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, {comercialName, genericName, quantity,lote, price, description, pharmaceuticForm, cum, finalDate});
    }
    // Acctualizar productos
    updateProduct(id:string ,comercialName: string, genericName:string, quantity:string,lote:string, price:string, description:string, pharmaceuticForm:string, cum:string, finalDate:string):Observable<any>{
      const body = { id, comercialName, genericName, quantity,lote, price, description, pharmaceuticForm, cum, finalDate };
      return this.http.put(`${this.apiUrl}/update/${id}`, body)
    }
    // Borrar un producto
    deleteProduct(id:number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }
    // obtener todos los productos
    getProtucts(): Observable<any[]>  {
      return this.http.get<any[]>(`${this.apiUrl}/getproducts`);
    }
    // Buscar producto
    //Obtener usuario por su Id
    getProductById(Id: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/getProductById/${Id}`);
    }
    //Obtener usuario por su nombre
    getProductByName(name: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/getProductByName/${name}`);
    }
}

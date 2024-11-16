import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  apiUrl = "https://localhost:7194/api/Users"

  constructor(private http: HttpClient) { }
      
    Registrar(username: string, lastname: string, email: string, phone: string, namegerente: string, emailgerente: string, dateinicio: string, datefin: string, notas: string):Observable<any>{
    const body = {username,lastname,email,phone,namegerente,emailgerente,dateinicio,datefin,notas};
    return this.http.post(`${this.apiUrl}/Registrar`, {username,lastname,email,phone,namegerente,emailgerente,dateinicio,datefin,notas});
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../models/venda';

const API = 'https://localhost:44346/api/venda/';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http:HttpClient) { }

  get(): Observable<any>{
    return this.http.get(API);
  }

  GetCompra(id: number): Observable<any>{
    return this.http.get(API + 'compra/' + id)
  }

  GetVenda(id: number): Observable<any>{
    return this.http.get(API + 'venda/' + id)
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  Add(venda: Venda): Observable<Venda>{
    return this.http.post<Venda>(API, venda)
  }

  Update(venda: Venda): Observable<Venda>{
    return this.http.put<Venda>(API, venda)
  }

  Delete(id: number): Observable<any>{
    return this.http.delete(API + id)
  }
}
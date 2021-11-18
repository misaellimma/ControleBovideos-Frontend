import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';

const API = 'https://localhost:44346/api/endereco/';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  Add(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>(API, endereco)
  }

  Update(id:number, endereco: Endereco): Observable<Endereco>{
    return this.http.put<Endereco>(API + id, endereco)
  }

  Delete(id: number): Observable<any>{
    return this.http.delete(API + id)
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtor } from '../models/produtor';

const API = 'https://localhost:44346/api/produtor/';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  constructor(private http:HttpClient) { }

  get(): Observable<Produtor[]>{
    return this.http.get<Produtor[]>(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  GetCpf(cpf: string): Observable<any>{
    return this.http.get(API + 'cpf=' + cpf)
  }

  GetUsuario(id: number): Observable<Produtor>{
    return this.http.get<Produtor>(API + 'usuario=' + id)
  }

  Add(produtor: Produtor): Observable<Produtor>{
    return this.http.post<Produtor>(API, produtor);
  }

  Update(produtor: Produtor): Observable<Produtor>{
    return this.http.put<Produtor>(API, produtor)
  }
}
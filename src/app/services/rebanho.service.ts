import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rebanho } from '../models/rebanho';

const API = 'https://localhost:44346/api/rebanho/';

@Injectable({
  providedIn: 'root'
})
export class RebanhoService {

  constructor(private http: HttpClient) { }

  get(): Observable<Rebanho[]>{
    return this.http.get<Rebanho[]>(API);
  }

  GetEspecie(id: number): Observable<Rebanho[]>{
    return this.http.get<Rebanho[]>(`${API}especie/${id}`);
  }

  GetId(id: number): Observable<any>{
    return this.http.get<any>(`${API}${id}`);
  }

  GetProdutor(idprodutor: number): Observable<any>{
  
    return this.http.get<any>(API + 'idprodutor/' + idprodutor)
  }

  GetPropriedade(idpropriedade: number): Observable<any>{
    return this.http.get(API + 'idpropriedade/' + idpropriedade)
  }

  Add(rebanho: Rebanho): Observable<Rebanho>{
    return this.http.post<Rebanho>(API, rebanho);
  }

  Update(rebanho: Rebanho): Observable<Rebanho>{
    return this.http.put<Rebanho>(API, rebanho)
  }

  Delete(id: number): Observable<any>{
    return this.http.delete(API + id)
  }
}
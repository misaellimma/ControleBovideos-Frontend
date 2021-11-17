import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from '../models/municipio';

const API = 'https://localhost:44346/api/municipio/';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http:HttpClient) { }

  get(): Observable<any>{
    return this.http.get(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  Add(municipio: Municipio): Observable<Municipio>{
    return this.http.post<Municipio>(API, municipio);
  }

  Update(municipio: Municipio): Observable<Municipio>{
    return this.http.put<Municipio>(API, municipio)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../models/vacina';

const API = 'https://localhost:44346/api/vacina/';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private http:HttpClient) { }

  get(): Observable<any>{
    return this.http.get(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  Add(vacina: Vacina): Observable<Vacina>{
    return this.http.post<Vacina>(API, vacina);
  }

  Update(vacina: Vacina): Observable<Vacina>{
    return this.http.put<Vacina>(API, vacina)
  }
}
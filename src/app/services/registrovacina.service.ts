import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroVacina } from '../models/registrovacina';

const API = 'https://localhost:44346/api/registrovacina/';

@Injectable({
  providedIn: 'root'
})
export class RegistrovacinaService {

  constructor(private http:HttpClient) { }

  get(): Observable<any>{
    return this.http.get(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  GetPropriedade(idpropriedade: number): Observable<any>{
    return this.http.get(API + "propriedade/" + idpropriedade)
  }

  GetRebanho(idrebanho: number): Observable<any>{
    return this.http.get(API + "rebanho/" + idrebanho)
  }


  Add(registrovacina: RegistroVacina): Observable<RegistroVacina>{
    return this.http.post<RegistroVacina>(API, registrovacina);
  }

  Update(registrovacina: RegistroVacina): Observable<RegistroVacina>{
    return this.http.put<RegistroVacina>(API, registrovacina)
  }

  Delete(id: number): Observable<any>{
    return this.http.delete(API + id)
  }
}
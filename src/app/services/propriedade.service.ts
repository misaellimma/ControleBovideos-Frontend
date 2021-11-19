import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propriedade } from '../models/propriedade';

const API = 'https://localhost:44346/api/propriedade/';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService {

  constructor(private http:HttpClient) { }

  get(): Observable<any>{
    return this.http.get(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  GetInscricao(inscricao: string): Observable<any>{
    return this.http.get(API + 'inscricao=' + inscricao)
  }
  GetValidaInscricao(inscricao: string): Observable<any>{
    return this.http.get(API + 'validainscricao=' + inscricao)
  }

  GetProdutor(idprodutor: number): Observable<any>{
    return this.http.get(API + 'idprodutor=' + idprodutor)
  }

  Add(propriedade: Propriedade): Observable<Propriedade>{
    return this.http.post<Propriedade>(API, propriedade);
  }

  Update(id: number, propriedade: Propriedade): Observable<Propriedade>{
    return this.http.put<Propriedade>(API + id, propriedade)
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinalidadeVenda } from '../models/finalidadeVenda';

const API = 'https://localhost:44346/api/finalidadevenda/';

@Injectable({
  providedIn: 'root'
})
export class FinalidadevendaService {

  constructor(private http:HttpClient) { }

  get(): Observable<FinalidadeVenda[]>{
    return this.http.get<FinalidadeVenda[]>(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  Add(finalidadevenda: FinalidadeVenda): Observable<FinalidadeVenda>{
    return this.http.post<FinalidadeVenda>(API, finalidadevenda);
  }

  Update(finalidadevenda: FinalidadeVenda): Observable<FinalidadeVenda>{
    return this.http.put<FinalidadeVenda>(API, finalidadevenda)
  }
}

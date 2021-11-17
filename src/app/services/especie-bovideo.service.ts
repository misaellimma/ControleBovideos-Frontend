import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspecieBovideo } from '../models/especieBovideo';

const API = 'https://localhost:44346/api/especiebovideo/';

@Injectable({
  providedIn: 'root'
})
export class EspecieBovideoService {

  constructor(private http:HttpClient) { }

  get(): Observable<EspecieBovideo[]>{
    return this.http.get<EspecieBovideo[]>(API);
  }

  GetId(id: number): Observable<any>{
    return this.http.get(API + id)
  }

  Add(especiebovideo: EspecieBovideo): Observable<EspecieBovideo>{
    return this.http.post<EspecieBovideo>(API, especiebovideo);
  }

  Update(especiebovideo: EspecieBovideo): Observable<EspecieBovideo>{
    return this.http.put<EspecieBovideo>(API, especiebovideo)
  }
}

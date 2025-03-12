// services/automobile.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {
  private apiUrl = 'http://localhost:3000/api/automobili';

  constructor(private http: HttpClient) {}

  getAutomobili(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addAutomobile(automobile: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, automobile);
  }

  deleteAutomobile(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

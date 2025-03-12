import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {
  private apiUrl = 'http://localhost:3000/automobili'; // Assicurati che l'URL sia corretto

  constructor(private http: HttpClient) {}

  // Ottieni tutte le automobili
  getAutomobili(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Aggiungi una nuova automobile
  addAutomobile(auto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, auto);
  }

  // Rimuovi un'automobile per ID
  deleteAutomobile(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

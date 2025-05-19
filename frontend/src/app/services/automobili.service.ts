import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomobiliService {
  private apiUrl = 'http://localhost:3000/api/automobili_disponibili'; // Assicurati che l'URL sia corretto

  constructor(private http: HttpClient) { }

  getAutomobiliDisponibili(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

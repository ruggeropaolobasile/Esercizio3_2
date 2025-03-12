import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


interface Automobile {
  id_automobile: number;
  marca: string;
  modello: string;
  immatricolazione: string;
  targa: string;
  id_cliente: number;
}

@Component({
  selector: 'app-automobile',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css']
})
export class AutomobileComponent implements OnInit {
  // Se nessun filtro viene passato, idCliente rimane null e vengono mostrate tutte le auto.
  idCliente: number | null = null;
  automobili: Automobile[] = [];
  automobileInserimento: Automobile = { 
    id_automobile: 0, 
    marca: '', 
    modello: '', 
    immatricolazione: '', 
    targa: '', 
    id_cliente: 0 
  };

  private apiUrl = 'http://localhost:3000/api/automobili';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Legge il parametro query "id_cliente" (se presente) e lo assegna
    this.route.queryParams.subscribe(params => {
      if (params['id_cliente']) {
        this.idCliente = +params['id_cliente'];
        // Imposta l'id nel modello di inserimento in modo che la nuova auto sia associata al cliente
        this.automobileInserimento.id_cliente = this.idCliente;
      } else {
        this.idCliente = null;
      }
      this.getAutomobili();
    });
  }

  // Recupera le automobili: se idCliente è valorizzato, aggiunge il filtro; altrimenti restituisce tutte le auto.
  getAutomobili(): void {
    let url = this.apiUrl;
    if (this.idCliente !== null) {
      url += `?id_cliente=${this.idCliente}`;
    }
    this.http.get<Automobile[]>(url)
      .pipe(
        catchError((error) => {
          console.error('Errore nel recupero delle automobili:', error);
          return of([]);
        })
      )
      .subscribe((data) => {
        this.automobili = data;
      });
  }

  // Inserisce una nuova automobile; se è presente un filtro (idCliente), lo assegna al modello.
  aggiungiAutomobile(): void {
    if (this.idCliente !== null) {
      this.automobileInserimento.id_cliente = this.idCliente;
    }
    this.http
      .post<Automobile>(this.apiUrl, this.automobileInserimento)
      .pipe(
        catchError((error) => {
          console.error("Errore nell'aggiunta dell'automobile:", error);
          return of(null);
        })
      )
      .subscribe((auto) => {
        if (auto) {
          this.automobili.push(auto);
          // Resetta il form; se è presente un filtro, mantieni l'id_cliente nel modello
          this.automobileInserimento = { 
            id_automobile: 0, 
            marca: '', 
            modello: '', 
            immatricolazione: '', 
            targa: '', 
            id_cliente: this.idCliente !== null ? this.idCliente : 0 
          };
        }
      });
  }

  // Elimina un'automobile
  eliminaAutomobile(idAutomobile: number): void {
    this.http.delete(`${this.apiUrl}/${idAutomobile}`)
      .pipe(
        catchError((error) => {
          console.error("Errore nell'eliminazione dell'automobile:", error);
          return of(null);
        })
      )
      .subscribe(() => {
        this.automobili = this.automobili.filter(auto => auto.id_automobile !== idAutomobile);
      });
  }
}

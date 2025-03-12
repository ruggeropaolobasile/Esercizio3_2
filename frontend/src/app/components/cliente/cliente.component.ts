import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface Cliente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
}

interface Automobile {
  id: number;
  modello: string;
  clienteId: number;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clienti: Cliente[] = [];
  nuovoCliente: Cliente = { id: 0, nome: '', cognome: '', email: '' };
  clienteModifica: Cliente | null = null;
  automobili: Automobile[] = [];
  automobiliVisibili: Automobile[] = [];
  private apiUrl = 'http://localhost:3000/api/clienti'; // URL del backend
  private automobiliUrl = 'http://localhost:3000/api/automobili'; // URL delle automobili

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getClienti();
    this.getAutomobili();
  }

  // Recupera tutti i clienti
  getClienti(): void {
    this.http
      .get<Cliente[]>(this.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Errore nel recupero dei clienti:', error);
          return of([]);
        })
      )
      .subscribe((data) => (this.clienti = data));
  }

  // Recupera tutte le automobili
  getAutomobili(): void {
    this.http
      .get<Automobile[]>(this.automobiliUrl)
      .pipe(
        catchError((error) => {
          console.error('Errore nel recupero delle automobili:', error);
          return of([]);
        })
      )
      .subscribe((data) => (this.automobili = data));
  }

  // Aggiungi un nuovo cliente
  aggiungiCliente(): void {
    const { nome, cognome, email } = this.nuovoCliente;
    if (!nome || !cognome || !email) {
      alert('Compila tutti i campi!');
      return;
    }
    this.http
      .post<Cliente>(this.apiUrl, this.nuovoCliente)
      .pipe(
        catchError((error) => {
          console.error("Errore nell'aggiunta del cliente:", error);
          return of(null);
        })
      )
      .subscribe((cliente) => {
        if (cliente) {
          this.clienti.push(cliente);
          this.nuovoCliente = { id: 0, nome: '', cognome: '', email: '' }; // Reset del form
        }
      });
  }

  // Seleziona un cliente per la modifica
  selezionaCliente(cliente: Cliente): void {
    this.clienteModifica = { ...cliente };
  }

  // Modifica un cliente
  modificaCliente(): void {
    if (!this.clienteModifica) return;
    const { id } = this.clienteModifica;
    this.http
      .put<Cliente>(`${this.apiUrl}/${id}`, this.clienteModifica)
      .pipe(
        catchError((error) => {
          console.error('Errore nella modifica del cliente:', error);
          return of(null);
        })
      )
      .subscribe((cliente) => {
        if (cliente) {
          const index = this.clienti.findIndex((c) => c.id === cliente.id);
          if (index !== -1) this.clienti[index] = cliente;
          this.clienteModifica = null; // Reset del form di modifica
        }
      });
  }

  // Elimina un cliente
  eliminaCliente(id: number): void {
    if (!confirm('Sei sicuro di voler eliminare questo cliente?')) return;

    this.http
      .delete(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error) => {
          console.error("Errore nell'eliminazione del cliente:", error);
          return of(null);
        })
      )
      .subscribe(() => {
        this.clienti = this.clienti.filter((c) => c.id !== id);
      });
  }

  // Funzione per visualizzare le automobili di un cliente
  selezionaAutomobile(cliente: Cliente): void {
    // Filtra le automobili in base al clienteId
    this.automobiliVisibili = this.automobili.filter(auto => auto.clienteId === cliente.id);
  }
}

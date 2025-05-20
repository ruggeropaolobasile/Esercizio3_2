import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css']
})
export class AutomobileComponent implements OnInit {
  automobileInserimento = {
    marca: '',
    modello: '',
    immatricolazione: '',
    targa: '',
    id_cliente: null
  };

  clienti: any[] = [];
  automobili: any[] = [];

  aggiungiAutomobile() {
    // logica da completare
  }

  eliminaAutomobile(id: number) {
    // logica da completare
  }

  ngOnInit(): void {
    // inizializzazione se serve
  }
}


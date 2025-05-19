import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  naviga(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const route = target.value;
    this.router.navigate([route]); // Naviga alla rotta selezionata
  }
}

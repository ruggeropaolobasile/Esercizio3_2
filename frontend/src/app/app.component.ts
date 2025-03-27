import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-management';

  constructor(private router: Router) {}

  naviga(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const path = selectElement.value;
    if (path) {
      this.router.navigate([path]);
    }
  }
}

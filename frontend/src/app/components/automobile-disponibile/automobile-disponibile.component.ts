import { Component, OnInit } from '@angular/core';
import { AutomobiliService } from '../../services/automobili.service';

@Component({
  selector: 'app-automobile-disponibile',
  templateUrl: './automobile-disponibile.component.html',
  styleUrls: ['./automobile-disponibile.component.css']
})
export class AutomobiliDisponibiliComponent implements OnInit {
  automobili: any[] = [];

  constructor(private automobiliService: AutomobiliService) { }

  ngOnInit(): void {
    this.automobiliService.getAutomobiliDisponibili().subscribe(data => {
      this.automobili = data;
    });
  }
}

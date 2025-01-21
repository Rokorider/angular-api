import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], // NO import HttpClient porque está en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css',
})
export class PracticaComponent {
  datos: any[] = []; //guardos los datos que se obtengan del servicio
  constructor(private servicio: ServiciopracticaService) {} //inyecto la dependencia del servicio
  ngOnInit(): void {
    {
      this.servicio.getDatos().subscribe((datos) => {
        this.datos = datos;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Universidad } from 'src/app/models/universidad';
import { UniversidadService } from 'src/app/shared/universidad.service'

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.component.html',
  styleUrls: ['./universidades.component.css']
})
export class UniversidadesComponent implements OnInit {

  misUniversidades: Universidad[]

  constructor(private service: UniversidadService) { }

  ngOnInit(): void {
    this.service.getUniversidades().subscribe(universidades => {
      this.misUniversidades = universidades;
    });
  }

}

import { Component } from '@angular/core';
import { CORTES } from 'src/app/data/cortes';
import { Cortes } from 'src/app/models/cortes.interfaces';

@Component({
  selector: 'app-seccion-servicios',
  templateUrl: './seccion-servicios.component.html',
  styleUrls: ['./seccion-servicios.component.css'],
})
export class SeccionServiciosComponent {
  cortes: Cortes[] = CORTES;
}

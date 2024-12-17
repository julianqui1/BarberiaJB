import { Component } from '@angular/core';
import { Cortes } from 'src/app/models/cortes.interfaces';
import { CORTES } from '../../data/cortes';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css'],
})
export class ServicioComponent {
  cortes: Cortes[] = CORTES;
}

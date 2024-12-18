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
  selectedCorte: any = null; // Corte seleccionado para el diálogo
  isDialogOpen = false; // Controla si el diálogo está abierto

  openDialog(corte: any) {
    this.selectedCorte = corte; // Asigna el corte seleccionado
    this.isDialogOpen = true; // Abre el diálogo
  }

  closeDialog() {
    this.isDialogOpen = false; // Cierra el diálogo
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servicio-dialogo',
  templateUrl: './servicio-dialogo.component.html',
  styleUrls: ['./servicio-dialogo.component.css'],
})
export class ServicioDialogoComponent {
  @Input() corte: any; // Datos del corte seleccionado
  @Input() isModalOpen: boolean = false; // Estado del diálogo
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el diálogo

  closeModal() {
    this.close.emit(); // Emite el evento de cierre
  }
}

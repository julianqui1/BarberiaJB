import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio-dialogo',
  templateUrl: './servicio-dialogo.component.html',
  styleUrls: ['./servicio-dialogo.component.css'],
})
export class ServicioDialogoComponent {
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}

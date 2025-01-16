import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() items: {
    nombre: string;
    descripcion: string;
    precio: string;
    url_img: string;
  }[] = []; // Datos dinámicos
  @Input() num!: number;
  @Output() slideLeft = new EventEmitter<string>();
  @Output() slideRight = new EventEmitter<string>();
  // Señal para rastrear el índice actual del slider
  currentIndex = signal(0);

  // Métodos para cambiar de imagen
  emitSlideLeft() {
    const newIndex =
      this.currentIndex() === 0
        ? this.items.length - 1
        : this.currentIndex() - 1;
    this.currentIndex.set(newIndex);
  }

  emitSlideRight() {
    const newIndex =
      this.currentIndex() === this.items.length - 1
        ? 0
        : this.currentIndex() + 1;
    this.currentIndex.set(newIndex);
  }
}

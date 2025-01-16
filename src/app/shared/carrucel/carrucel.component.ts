import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css'],
})
export class CarrucelComponent implements OnInit, OnDestroy {
  @Input() items: any[] = [];
  currentIndex = 0;
  itemsToShow = 12;

  private autoSlideInterval: any; // Almacena el intervalo

  ngOnInit() {
    this.startAutoSlide(); // Inicia el auto desplazamiento
  }

  ngOnDestroy() {
    this.stopAutoSlide(); // Limpia el intervalo al destruir el componente
  }

  nextSlide() {
    if (this.currentIndex < this.items.length - this.itemsToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.items.length - this.itemsToShow;
    }
  }

  // Inicia el desplazamiento automático
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Cambia cada 4 segundos
  }

  // Detiene el desplazamiento automático
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}

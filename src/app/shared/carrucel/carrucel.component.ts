import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css'],
})
export class CarrucelComponent {
  @Input() items: any[] = [];
  currentIndex = 0;
  itemsToShow = 6;

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
}

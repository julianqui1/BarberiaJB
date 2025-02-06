import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { PRODUCTOS } from '../../data/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos = PRODUCTOS.slice(0, 9);
  swiperProductos = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemProductos = document.querySelector('.slider-productos');
    const productosOptions: SwiperOptions = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.slider-productos-next',
        prevEl: '.slider-productos-prev',
        enabled: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };
    Object.assign(swiperElemProductos!, productosOptions);
    this.swiperProductos.set(swiperElemProductos as SwiperContainer);
    this.swiperProductos()?.initialize();
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { BEBIDAS } from '../../data/bebidas';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css'],
})
export class BebidasComponent implements OnInit {
  bebidas = BEBIDAS.slice(0, 9);
  swiperBebidas = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemBebidas = document.querySelector('.slider-bebidas');
    const bebidasOptions: SwiperOptions = {
      slidesPerView: 1,
      //pagination: {
      //el: '.slider-bebidas-pagination',
      //clickable: true,
      //},
      navigation: {
        nextEl: '.slider-bebidas-next',
        prevEl: '.slider-bebidas-prev',
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
    Object.assign(swiperElemBebidas!, bebidasOptions);
    this.swiperBebidas.set(swiperElemBebidas as SwiperContainer);
    this.swiperBebidas()?.initialize();
  }
}

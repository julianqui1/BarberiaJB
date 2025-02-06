import { Component, OnInit } from '@angular/core';
import { Cortes } from './models/cortes.interfaces';
import { CORTES } from './data/cortes';
import { BEBIDAS } from './data/bebidas';
import { PRODUCTOS } from './data/productos';

import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'BarberiaJB';

  cortes: Cortes[] = CORTES;

  ngOnInit(): void {
    AOS.init({
      duration: 800, // Duración de la animación
      easing: 'linear', // Efecto de suavizado
    });
    this.router.events.subscribe(() => {
      AOS.refresh();
    });
  }

  bebidas = BEBIDAS.slice(0, 6);
  productos = PRODUCTOS.slice(0, 6);
}

import { Component, OnInit } from '@angular/core';
import { Cortes } from './models/cortes.interfaces';
import { CORTES } from './data/cortes';
import { BEBIDAS } from './data/bebidas';
import { PRODUCTOS } from './data/productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BarberiaJB';

  cortes: Cortes[] = CORTES;

  ngOnInit(): void {}

  bebidas = BEBIDAS.slice(0, 6);
  productos = PRODUCTOS.slice(0, 6);
}

import { Component } from '@angular/core';
import { PRODUCTOS } from '../../data/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  productos = PRODUCTOS.slice(0, 12);
}

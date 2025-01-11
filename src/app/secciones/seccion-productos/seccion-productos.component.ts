import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../../data/productos';
import { Producto } from '../../models/productos.interface';

@Component({
  selector: 'app-seccion-productos',
  templateUrl: './seccion-productos.component.html',
  styleUrls: ['./seccion-productos.component.css'],
})
export class SeccionProductosComponent {
  productos: Producto[] = [];

  ngOnInit() {
    this.productos = PRODUCTOS; // Carga la lista de productos
  }
}

import { Component, Input } from '@angular/core';
import { Producto } from '../../models/productos.interface';
import { Bebida } from '../../models/bebidas.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: any;
  @Input() data!: Producto;
  @Input() datas!: Bebida;
}

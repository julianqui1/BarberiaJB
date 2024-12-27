import { Component } from '@angular/core';
import { BEBIDAS } from '../../data/bebidas';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css'],
})
export class BebidasComponent {
  bebidas = BEBIDAS.slice(0, 12);
}

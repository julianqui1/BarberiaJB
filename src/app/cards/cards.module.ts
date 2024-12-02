import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioComponent } from './servicio/servicio.component';
import { BebidaComponent } from './bebida/bebida.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [ServicioComponent, BebidaComponent, ProductoComponent],
  imports: [CommonModule],
  exports: [BebidaComponent, ServicioComponent],
})
export class CardsModule {}

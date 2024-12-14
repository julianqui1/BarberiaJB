import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioComponent } from './servicio/servicio.component';
import { BebidaComponent } from './bebida/bebida.component';
import { ProductoComponent } from './producto/producto.component';
import { ServicioDialogoComponent } from './servicio-dialogo/servicio-dialogo.component';

@NgModule({
  declarations: [
    ServicioComponent,
    BebidaComponent,
    ProductoComponent,
    ServicioDialogoComponent,
  ],
  imports: [CommonModule],
  exports: [
    BebidaComponent,
    ServicioComponent,
    ProductoComponent,
    ServicioDialogoComponent,
  ],
})
export class CardsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioComponent } from './servicio/servicio.component';
import { BebidaComponent } from './bebida/bebida.component';
import { ProductoComponent } from './producto/producto.component';
import { ServicioDialogoComponent } from './servicio-dialogo/servicio-dialogo.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ServicioComponent,
    BebidaComponent,
    ProductoComponent,
    ServicioDialogoComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    BebidaComponent,
    ServicioComponent,
    ProductoComponent,
    ServicioDialogoComponent,
    CardComponent,
  ],
})
export class CardsModule {}

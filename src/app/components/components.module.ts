import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from './bebidas/bebidas.component';
import { HorarioComponent } from './horario/horario.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardsModule } from '../cards/cards.module';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    BebidasComponent,
    HorarioComponent,
    PresentacionComponent,
    ProductosComponent,
    ServiciosComponent,
    UbicacionComponent,
    WelcomeComponent,
    ContactoComponent,
  ],
  exports: [
    BebidasComponent,
    WelcomeComponent,
    ServiciosComponent,
    BebidasComponent,
    PresentacionComponent,
    ProductosComponent,
    HorarioComponent,
    ContactoComponent
  ],
  imports: [CommonModule, CardsModule],
})
export class ComponentsModule {}

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
import { CarrucelComponent } from '../shared/carrucel/carrucel.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

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
    MainComponent,
  ],
  exports: [
    BebidasComponent,
    WelcomeComponent,
    ServiciosComponent,
    PresentacionComponent,
    ProductosComponent,
    HorarioComponent,
    UbicacionComponent,
    ContactoComponent,
  ],
  imports: [CommonModule, CardsModule, SharedModule],
})
export class ComponentsModule {}

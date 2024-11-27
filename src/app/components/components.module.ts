import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from './bebidas/bebidas.component';
import { HorarioComponent } from './horario/horario.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    BebidasComponent,
    HorarioComponent,
    PresentacionComponent,
    ProductosComponent,
    ServiciosComponent,
    UbicacionComponent,
    WelcomeComponent,
  ],
  imports: [CommonModule],
  exports: [BebidasComponent, WelcomeComponent],
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionProductosComponent } from './seccion-productos/seccion-productos.component';
import { SeccionServiciosComponent } from './seccion-servicios/seccion-servicios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SeccionProductosComponent, SeccionServiciosComponent],
  imports: [CommonModule, SharedModule],
  exports: [SeccionProductosComponent, SeccionServiciosComponent],
})
export class SeccionesModule {}

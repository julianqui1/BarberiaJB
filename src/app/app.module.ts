import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { HorarioComponent } from './components/horario/horario.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PresentacionComponent,
    ServiciosComponent,
    BebidasComponent,
    HorarioComponent,
    UbicacionComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionServiciosComponent } from './secciones/seccion-servicios/seccion-servicios.component';
import { SeccionProductosComponent } from './secciones/seccion-productos/seccion-productos.component';
import { MainComponent } from './components/main/main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },

  {
    path: 'home',
    component: MainComponent,
  },

  {
    path: 'cortes',
    component: SeccionServiciosComponent,
  },
  {
    path: 'productos',
    component: SeccionProductosComponent,
  },
  {
    path: '**',
    redirectTo: '', // Para manejar rutas no existentes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { CardsModule } from './cards/cards.module';
import { SeccionesModule } from './secciones/secciones.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    CardsModule,
    SeccionesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarrucelComponent],
  imports: [CommonModule, CardsModule],
  exports: [HeaderComponent, CarrucelComponent],
})
export class SharedModule {}

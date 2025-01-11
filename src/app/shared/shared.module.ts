import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { CardsModule } from '../cards/cards.module';
import { HeroImgComponent } from './hero-img/hero-img.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarrucelComponent,
    HeroImgComponent,
  ],
  imports: [CommonModule, CardsModule],
  exports: [
    HeaderComponent,
    CarrucelComponent,
    HeroImgComponent,
    FooterComponent,
  ],
})
export class SharedModule {}

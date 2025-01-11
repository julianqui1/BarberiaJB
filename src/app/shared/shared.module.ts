import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { CardsModule } from '../cards/cards.module';
import { HeroImgComponent } from './hero-img/hero-img.component';

//No olvidar para la proxima tambine importar el modulo de RouterModule en hared.module.ts
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarrucelComponent,
    HeroImgComponent,
  ],
  imports: [CommonModule, CardsModule, RouterModule],
  exports: [
    HeaderComponent,
    CarrucelComponent,
    HeroImgComponent,
    FooterComponent,
  ],
})
export class SharedModule {}

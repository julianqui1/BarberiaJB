import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { CardsModule } from '../cards/cards.module';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { WhatsappBtnComponent } from './whatsapp-btn/whatsapp-btn.component';

//No olvidar para la proxima tambine importar el modulo de RouterModule en hared.module.ts
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarrucelComponent,
    HeroImgComponent,
    WhatsappBtnComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    CarrucelComponent,
    HeroImgComponent,
    FooterComponent,
    WhatsappBtnComponent,
  ],
})
export class SharedModule {}

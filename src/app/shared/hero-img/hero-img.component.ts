import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.css'],
})
export class HeroImgComponent {
  @Input() title: string = 'Barbershop JB';
  @Input() subtitle: string = 'Estilo y perfección en cada corte y afeitado';
  @Input() backgroundImage: string = '../../assets/welcomegrande.jpg';

  algo: string = 'hola';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css'],
})
export class WhatsappBtnComponent {
  @Input() message: string = 'Hola, quiero más información';
  @Input() isReversed: boolean = false;

  phoneNumber: string = '573143461725';

  get whatsappUrl(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(
      this.message
    )}`;
  }
}

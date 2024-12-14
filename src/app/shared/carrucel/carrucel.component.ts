import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css'],
})
export class CarrucelComponent {
  @Input() items: any[] = [];
  @Input() carrucelId: string = 'carrucel';
  @Input() useTemplate: boolean = false;
  @Input() itemTemplate!: TemplateRef<any>;
}

import { Component, OnInit } from '@angular/core';
import { Cortes } from './models/cortes.interfaces';
import { CORTES } from './data/cortes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BarberiaJB';

  cortes: Cortes[] = CORTES;

  ngOnInit(): void {}
}

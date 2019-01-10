import { Component, OnInit } from '@angular/core';
import ofertas from 'src/app/models/ofertas';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas: any[] = ofertas

  constructor() { }

  ngOnInit() {
  }

}

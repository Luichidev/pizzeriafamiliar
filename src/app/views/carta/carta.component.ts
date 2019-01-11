import { Component, OnInit } from '@angular/core';
import tradicionales from 'src/app/models/pizzas-tradicionales';
import especiales from 'src/app/models/pizzas-especiales';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  pizzas : any[] = tradicionales
  pizzasEspeciales : any[] = especiales

  constructor() { }

  ngOnInit() {
  }

}

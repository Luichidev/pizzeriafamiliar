import { Component, OnInit } from '@angular/core';
import tradicionales from 'src/app/models/pizzas-tradicionales';
import especiales from 'src/app/models/pizzas-especiales';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizzas : any[] = tradicionales
  pizzasEspeciales : any[] = especiales

  constructor() { }

  ngOnInit() {
  }

  onOpen(event: any) {
    console.log(event)
  }
}

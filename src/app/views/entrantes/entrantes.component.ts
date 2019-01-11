import { Component, OnInit } from '@angular/core';
import entrantes from 'src/app/models/entrantes';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.css']
})
export class EntrantesComponent implements OnInit {

  entrantes : any[] = entrantes

  constructor() { }

  ngOnInit() {
  }

}

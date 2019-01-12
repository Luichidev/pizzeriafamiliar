import { Component, OnInit } from '@angular/core';
import entrantes from 'src/app/models/entrantes';
import pastas from 'src/app/models/pastas';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.css']
})
export class EntrantesComponent implements OnInit {

  entrantes : any[] = entrantes
  pastas : any[] = pastas

  constructor() { }

  ngOnInit() {
  }

  onOpen(event: any) {
    console.log(event)
  }
}

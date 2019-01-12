import { Component, OnInit } from '@angular/core';
import postres from 'src/app/models/postres';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  postres : any[] = postres

  constructor() { }

  ngOnInit() {
  }

  onOpen(event: any) {
    console.log(event)
  }

}

import { Component, OnInit } from '@angular/core';
import carousel from '../../models/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cards: any[] = carousel
  slides: any = [[]];


  constructor() { }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 3)
  }
}

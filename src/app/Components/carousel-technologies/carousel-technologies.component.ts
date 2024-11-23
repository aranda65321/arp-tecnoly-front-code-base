import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-carousel-technologies',
  templateUrl: './carousel-technologies.component.html',
  styleUrls: ['./carousel-technologies.component.scss']
})
export class CarouselTechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  scrollLeft() {
    const leftPos = $('#icons-container').scrollLeft();
    if (leftPos !== undefined) {
      $('#icons-container').animate({
        scrollLeft: - 400
      }, 500);
    }
  }

  scrollRight() {
    const leftPos = $('#icons-container').scrollLeft();
    console.log(leftPos);
    if (leftPos !== undefined) {
      $('#icons-container').animate({
        scrollLeft: leftPos + 400
      }, 500);
    }
  }
}

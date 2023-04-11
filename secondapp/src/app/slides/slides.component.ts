import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class slidesComponent implements OnInit, OnDestroy {
  @ViewChild('slideshow') slideshow!: ElementRef<HTMLImageElement>;

  images = ["http://localhost/lion.png", "http://localhost/image 1.png", "http://localhost/image2.png"];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.slideshow.nativeElement.src = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}



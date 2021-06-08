import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input()
  maxRating = 5;
  maxRatingArr = [];
  @Input()
  selectedRate;
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();

  previousRate;

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating);
  }
  // tslint:disable-next-line:typedef
  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }
  // tslint:disable-next-line:typedef
  handleMouseLeave() {
    if (this.previousRate !== 0) {
      this.selectedRate = this.previousRate;
    } else {
      this.selectedRate = 0;
    }
  }
  // tslint:disable-next-line:typedef
  rate(index: number) {
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}

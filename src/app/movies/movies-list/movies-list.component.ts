import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }
  @Input()
  movies;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  remove(index: number) {
    this.movies.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  handleRating(rate: number) {
    alert(`User rate ${rate}`);
  }

}

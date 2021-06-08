import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'movieApp';
  inTheaters;
  futureReleased;

  ngOnInit(): void {
    setTimeout(() => {
      this.inTheaters = [{
        title: 'Spider Man',
        releaseDate: new Date('2001-01-12'),
        price: 149.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-10-19'),
        price: 129.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      ];
      this.futureReleased = [];

    }, 1000);
  }


}

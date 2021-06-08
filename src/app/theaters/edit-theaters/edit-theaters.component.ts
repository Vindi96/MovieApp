import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-theaters',
  templateUrl: './edit-theaters.component.html',
  styleUrls: ['./edit-theaters.component.css']
})
export class EditTheatersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Alert } from '../../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-edit-ganres',
  templateUrl: './edit-ganres.component.html',
  styleUrls: ['./edit-ganres.component.css']
})
export class EditGanresComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    });
  }

}

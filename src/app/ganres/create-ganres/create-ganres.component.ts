import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-ganres',
  templateUrl: './create-ganres.component.html',
  styleUrls: ['./create-ganres.component.css']
})
export class CreateGanresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  handleSave() {
    this.router.navigate(['/ganres']);
  }

}

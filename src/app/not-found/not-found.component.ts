import { Component, OnInit } from '@angular/core';

let visitCount = 0;

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  public count = 0;

  constructor() {}

  ngOnInit() {
    this.count = visitCount;
    visitCount++;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createArray(200);
  }

  private arr = [];

  private createArray(number) {
    for (let i=0; i<number; i++) {
      this.arr.push(i);
    }
  }

}

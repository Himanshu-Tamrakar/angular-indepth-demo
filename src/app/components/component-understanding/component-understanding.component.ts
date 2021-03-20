import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-understanding',
  template: ` <h1 class="h1-style">This is H1 Tag</h1> `,
  styles: [
    `
      .h1-style {
        color: red;
      }
    `,
    `
      .h1-style {
        color: blue;
      }
    `,
  ],
  // templateUrl: './component-understanding.component.html',
  // styleUrls: ['./component-understanding.component.scss']
})
export class ComponentUnderstandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

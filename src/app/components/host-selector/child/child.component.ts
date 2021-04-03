import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <p id="one">Host selector child</p> `,
  styles: [
    `
      :host {
        background-color: blue;
      }
    `,
  ],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.querySelector('#one').parentNode['style']['margin'] = '10px';
  }
}

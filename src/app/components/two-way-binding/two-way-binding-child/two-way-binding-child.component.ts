import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-child',
  template: `
    <p>
      two-way-binding-child works!
    </p>
  `,
  styles: [
  ]
})
export class TwoWayBindingChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

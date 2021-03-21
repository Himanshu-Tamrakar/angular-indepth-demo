import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <p [style.font-size.px]="fontSizePx">
      two-way-binding works!
    </p>

    <div [style.font-size.px]="fontSizePx">Resizable Text</div>

    <app-sizer [(size)]="fontSizePx"></app-sizer>

    <!-- Sam as below line -->
    <!-- <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer> -->

  `,
  styles: [
  ]
})
export class TwoWayBindingComponent implements OnInit {

  fontSizePx = 20;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-child1',
  template: `
  <div class="div-brdr">
    <h1 class="h1-clr">I am from app-view-encapsulation-child1 component; my color should be red</h1>
  </div>
    
  `,
  styles: [`
    /* .h1-clr {
      color: red
    } */
    .div-brdr {
      background-color: indianred;
    }
  `],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class ViewEncapsulationChild1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

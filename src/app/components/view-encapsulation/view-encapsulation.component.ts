import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  template: `
  <div class="div-brdr">
    <h1 class="h1-clr">I am from app-view-encapsulation component; my color should be green</h1>
    <h2 class="h2-clr">I am from app-view-encapsulation component; my color should be black</h2>
    <app-view-encapsulation-child1></app-view-encapsulation-child1>
  </div>
    
  `,
  styles: [`
    .h1-clr {
      color: green;
    }


    .h2-clr {
    }
  `],
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

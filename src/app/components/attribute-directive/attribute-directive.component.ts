import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HighlightDirective } from 'src/app/directives/highlight/highlight.directive';

@Component({
  selector: 'app-attribute-directive',
  template: `
    <!-- <p appHighlight>
      Attribute Directive Example
    </p> -->

    <!-- <p [appHighlight]="color">
      Attribute Directive Example
    </p> -->


    <h1>My First Attribute Directive</h1>

    <h2>Pick a highlight color</h2>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [appHighlight]="color" defaultColor="indianred">Highlight me!</p>


    <div ngNonBindable [appHighlight]="'yellow'">
      This should not evaluate: {{ 1 +1 }}, but will highlight yellow.
    </div>

  `,
  styles: [
  ]
})
export class AttributeDirectiveComponent implements AfterViewInit {

  color;

  @ViewChild(HighlightDirective, {read: HighlightDirective}) highlight: HighlightDirective;
  
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.highlight);
  }

}

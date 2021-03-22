import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-as-template',
  template: `
   <svg>
    <g>
      <rect x="0" y="0" width="100" height="100" [attr.fill]="fillColor" (click)="changeColor()" />
      <text x="120" y="50">click the rectangle to change the fill color</text>
    </g>
  </svg>
  `,
  styles: [
  ]
})
export class SvgAsTemplateComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

}

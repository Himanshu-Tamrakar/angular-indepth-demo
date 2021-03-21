import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
   <div>
      <button (click)="dec()" title="smaller">-</button>
      <button (click)="inc()" title="bigger">+</button>
      <label [style.font-size.px]="size">FontSize: {{size}}px</label>
    </div>
  `,
  styles: [`
    div {
      background-color: cornflowerblue;
    }

    button {
      padding: 10px;
    }

  `]
})
export class SizerComponent {
  @Input() size: number;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}

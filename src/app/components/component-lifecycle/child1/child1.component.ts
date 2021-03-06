import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>child1 works!</p>
    Input Property Name: {{ name }} <br />
    Input Property Age: {{ age }} <br />
    Input Property user: {{ user | json }} <br />
    <button type="submit" (click)="('')">Click Child1</button>
  `,
  styles: [`'./child1.component.scss'`],
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
})
export class Child1Component
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input('name') name: string;
  @Input('age') age: number;

  @Input('user') user: object;

  constructor() {
    console.group('Child1Component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c Child1Component:: ngOnChanges', 'color: green');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('%c Child1Component:: ngOnInit', 'color: green');
  }
  ngDoCheck(): void {
    console.log('%c Child1Component:: ngDoCheck', 'color: green');
    console.log(this.user);
  }
  ngAfterContentInit(): void {
    console.log('%c Child1Component:: ngAfterContentInit', 'color: green');
  }
  ngAfterContentChecked(): void {
    console.log('%c Child1Component:: ngAfterContentChecked', 'color: green');
  }
  ngAfterViewInit(): void {
    console.log('%c Child1Component:: ngAfterViewInit', 'color: green');
  }
  ngAfterViewChecked(): void {
    console.log('%c Child1Component:: ngAfterViewChecked', 'color: green');
  }
}

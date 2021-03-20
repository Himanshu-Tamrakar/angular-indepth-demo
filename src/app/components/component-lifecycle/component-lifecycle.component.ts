import { OnChanges, SimpleChanges } from '@angular/core';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  template: `
    <p>component-lifecycle works!</p>
    <button (click)="'nothing'" type="submit">Click</button>
    <app-child1 [name]="name"></app-child1>
  `,
  styles: [``],
})
export class ComponentLifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
      
  // public name = {fullName: 'Himanshu Tamrakar'};
  public name = 'Himanshu Tamrakar';

  constructor() {
    console.group('ComponentLifecycleComponent');

    setTimeout(() => {
      console.log('ComponentLifecycleComponent:: Contructor');
      // this.name.fullName = 'Tamrakar';
      this.name = 'Tamrakar';
    }, 5000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ComponentLifecycleComponent:: ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('ComponentLifecycleComponent:: ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ComponentLifecycleComponent:: ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ComponentLifecycleComponent:: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ComponentLifecycleComponent:: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ComponentLifecycleComponent:: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ComponentLifecycleComponent:: ngAfterViewChecked');
  }
}

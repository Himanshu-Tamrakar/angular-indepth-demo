import {
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
    <button (click)="('nothing')" type="submit">Click</button>
    <button (click)="updateName()" type="submit">Update Name</button>
    <button (click)="updateNameinUser()" type="submit">
      Update Name Property
    </button>
    <app-child1 [name]="name" [age]="age" [user]="user"></app-child1>
  `,
  styles: [``],
  // changeDetection: ChangeDetectionStrategy.OnPush,s
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
  public age = 28;

  public user = { name: 'Tamrakar Himanshu', age: 82 };

  constructor() {
    console.group('ComponentLifecycleComponent');

    // setTimeout(() => {
    //   console.log('ComponentLifecycleComponent:: Contructor');
    //   // this.name.fullName = 'Tamrakar';
    //   this.name = 'Tamrakar';
    // }, 5000);
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

  updateNameinUser() {
    this.user.name = 'Tamrakar Monty';
  }

  updateName() {
    this.name = 'Himanshu';
  }
}

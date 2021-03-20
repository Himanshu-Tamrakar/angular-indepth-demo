import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  template: `
  <div>
    {{name}}
    <br/>
    Details:
    <section>
      <div>{{_userDetails.id}}</div>
      <div>{{_userDetails.username}}</div>
    </section>  
    <hr>
  </div>
    
  `,
  styles: [`
  `],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentInteractionChildComponent implements OnInit, OnChanges {

  public _userDetails;
  @Input() name: string;

  @Input('user') 
    get userData() {return this._userDetails};
    set userData(user) {this._userDetails = user;}

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.table(changes);
  }

  ngOnInit(): void {
  }

}

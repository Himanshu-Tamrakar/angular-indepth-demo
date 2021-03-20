import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voters',
  template: `
    <section class="vtr">
      Name: {{voter.username}} 
      <button type="submit" (click)="onVote(true)">Agree</button>
      <button type="submit" (click)="onVote(false)">Disagree</button>

      {{didVote}}
    </section>
 `,
  styles: [`
    .vtr {
      background-color: lavender;
      margin: 5px;
    }
  `]
})
export class VotersComponent implements OnInit {
  didVote: boolean;
  @Input('voter') voter: any;
  
  @Output() voted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onVote(action:boolean) {
    this.voted.emit(action);
    this.didVote = action;
  }

}

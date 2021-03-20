import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
      <app-voters 
        *ngFor="let voter of voters"
        [voter]="voter"

        (voted)="onVote($event)"
        >

      </app-voters>
  `,
  styles: [`
  `]
})
export class VoteTakerComponent implements OnInit {

  public voters = [
    { "id": 1, "username": "Bret" },
    { "id": 2, "username": "Antonette" },
    { "id": 3, "username": "Samantha" },
    { "id": 4, "username": "Karianne" },
    { "id": 5,"username": "Kamren"  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onVote(e) {
    console.log(e);
  }

}

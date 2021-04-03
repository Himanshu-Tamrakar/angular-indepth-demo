import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  template: `
    <p>async-pipe works!</p>
    <p>Message: {{ messages$ | async }}</p>

    <button type="submit" (click)="resend()">Resend</button>
  `,
  styles: [],
})
export class AsyncPipeComponent implements OnInit {
  messages$: Observable<string>;
  private messages = [
    'You are my hero',
    'You are the best hero!',
    'Will you be my hero?',
  ];
  constructor() {
    this.resend();
  }

  ngOnInit(): void {}

  resend() {
    this.messages$ = interval(500).pipe(
      map((i) => this.messages[i]),
      take(this.messages.length)
    );
  }
}

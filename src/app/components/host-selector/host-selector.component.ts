import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-selector',
  template: `
    <p>host-selector works!</p>

    <app-child></app-child>
  `,
  styles: [],
})
export class HostSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

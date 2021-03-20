
// IDEMPOTENT EXPRESSIONS REDUCE SIDE EFFECTS
// e.is [*ngFor with trackby is example]
// https://angular.io/guide/interpolation

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    #fullName#

    <br>

    Customer: #customer#
    <ul>
        <li *ngFor="let customer of customers"># customer.fisrtName #</li>
      </ul>
  `,
  styles: [`
  `],
  interpolation: ['#', '#']
})
export class InterpolationComponent implements OnInit {

  public fullName = 'Himanshu Tamrakar';

  public customers = [{fisrtName: "A", age: 32}, {fisrtName: "X", age: 32}]

  public customer = 'YULO';
  constructor() { }

  ngOnInit(): void {
  }

}

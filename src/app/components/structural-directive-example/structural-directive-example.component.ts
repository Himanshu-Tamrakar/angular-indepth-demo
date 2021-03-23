import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-example',
  template: `
    <p *appUnless='false' class="unless a">
      (A) This paragraph is displayed because the condition is false.
    </p>
    <app-structural-directive *appUnless='false'></app-structural-directive>
    
  `,
  styles: [
  ]
})
export class StructuralDirectiveExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

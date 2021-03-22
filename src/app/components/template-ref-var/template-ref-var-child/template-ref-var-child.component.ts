import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var-child',
  template: `
    <p>
      template-ref-var-child works!
    </p>
  `,
  styles: [
  ]
})
export class TemplateRefVarChildComponent implements OnInit {

  fullName = 'Himanshu Tamrakar';
  constructor() { }

  ngOnInit(): void {
  }

}

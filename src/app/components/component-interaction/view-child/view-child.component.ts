import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
    <p>view-child works!</p>
    {{fullName}}

  `,
  styles: [``]
})
export class ViewChildComponent implements OnInit {

  fullName = 'HImanshu Tamrakar';

  constructor() { }

  ngOnInit(): void {
  }

}

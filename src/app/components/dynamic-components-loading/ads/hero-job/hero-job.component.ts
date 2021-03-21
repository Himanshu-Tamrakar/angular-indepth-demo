import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-hero-job',
  template: `
   <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `,
  styles: [
  ]
})
export class HeroJobComponent implements AdComponent {
  @Input() data: any;

  constructor() { }
}

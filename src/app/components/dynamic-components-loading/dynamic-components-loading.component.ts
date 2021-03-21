import { Component, Inject, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad/ad.service';
import { AdItem } from './ads/ad-item';

@Component({
  selector: 'app-dynamic-components-loading',
  template: `
      <h4>Dynamic Component Loading Example...</h4>
      <app-ad-banner [ads]="ads"></app-ad-banner>
  `,
  styles: [`
  `]
})
export class DynamicComponentsLoadingComponent implements OnInit {
  ads: AdItem[];
  constructor(private adService: AdService) { 
  }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}

import { Injectable } from '@angular/core';
import { AdItem } from 'src/app/components/dynamic-components-loading/ads/ad-item';
import { HeroJobComponent } from 'src/app/components/dynamic-components-loading/ads/hero-job/hero-job.component';
import { HeroProfileComponent } from 'src/app/components/dynamic-components-loading/ads/hero-profile/hero-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor() { }

  getAds() {
    return [
      new AdItem(HeroJobComponent, { headline: 'Hiring for several positions', body: 'Submit your resume today!'}),
      new AdItem(HeroJobComponent, { headline: 'Openings in all departments', body: 'Apply today'}),
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'})
    ]
  }
}

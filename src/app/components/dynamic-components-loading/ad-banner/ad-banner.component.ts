import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AdDirective } from 'src/app/directives/ad/ad.directive';
import { AdItem } from '../ads/ad-item';
import { AdComponent } from '../ads/ad.component';
import { HeroJobComponent } from '../ads/hero-job/hero-job.component';
import { HeroProfileComponent } from '../ads/hero-profile/hero-profile.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="banner">
      <h3>Advertisements</h3>
      <ng-template #adsRef adHost></ng-template>

    </div>
  `,
  styles: [`
    .banner {
      background-color: indianred;
    }
  `]
})
export class AdBannerComponent implements OnInit, AfterViewInit, OnDestroy {

  interval;

  currIndex = -1;
  @Input() ads: AdItem[];

  @ViewChild('adsRef', {read: ViewContainerRef}) vc: ViewContainerRef; // We will use a directive instead
 
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngAfterViewInit(): void {
    console.log('c', this.vc);
    console.log('d', this.adHost);
  }

  ngOnInit(): void {
    this.laodComponent();
    this.hostAds();
  }

  private laodComponent() {
    this.currIndex = (this.currIndex + 1) % this.ads.length;
    const item = this.ads[this.currIndex];

    const componentFactory: ComponentFactory<AdComponent> = this.componentFactoryResolver
        .resolveComponentFactory<HeroJobComponent | HeroProfileComponent>(item.component);

    const viewContainerRef = this.adHost.vc;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);

    componentRef.instance.data = item.data;
  }


  private hostAds() {
    this.interval = setInterval(() => this.laodComponent(), 2000);
  }


  

}

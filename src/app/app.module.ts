import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentUnderstandingComponent } from './components/component-understanding/component-understanding.component';
import { ComponentLifecycleComponent } from './components/component-lifecycle/component-lifecycle.component';
import { Child1Component } from './components/component-lifecycle/child1/child1.component';
import { Child2Component } from './components/component-lifecycle/child2/child2.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { ViewEncapsulationChild1Component } from './components/view-encapsulation/view-encapsulation-child1/view-encapsulation-child1.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ComponentInteractionChildComponent } from './components/component-interaction/component-interaction-child/component-interaction-child.component';
import { ViewChildComponent } from './components/component-interaction/view-child/view-child.component';
import { VoteTakerComponent } from './components/component-interaction/vote-taker/vote-taker.component';
import { VotersComponent } from './components/component-interaction/vote-taker/voters/voters.component';
import { ComponentStyleComponent } from './components/component-style/component-style.component';
import { DynamicComponentsLoadingComponent } from './components/dynamic-components-loading/dynamic-components-loading.component';
import { AdBannerComponent } from './components/dynamic-components-loading/ad-banner/ad-banner.component';
import { AdDirective } from './directives/ad/ad.directive';
import { HeroProfileComponent } from './components/dynamic-components-loading/ads/hero-profile/hero-profile.component';
import { HeroJobComponent } from './components/dynamic-components-loading/ads/hero-job/hero-job.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { AttrClassStyleBindingComponent } from './components/attr-class-style-binding/attr-class-style-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TwoWayBindingChildComponent } from './components/two-way-binding/two-way-binding-child/two-way-binding-child.component';
import { SizerComponent } from './components/two-way-binding/sizer/sizer.component';
import { TemplateRefVarComponent } from './components/template-ref-var/template-ref-var.component';
import { TemplateRefVarChildComponent } from './components/template-ref-var/template-ref-var-child/template-ref-var-child.component';
import { FormsModule } from '@angular/forms';
import { SvgAsTemplateComponent } from './components/svg-as-template/svg-as-template.component';
import { BuildInDirectivesComponent } from './components/build-in-directives/build-in-directives.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { AttributeDirectiveExampleComponent } from './components/attribute-directive/attribute-directive-example/attribute-directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentUnderstandingComponent,
    ComponentLifecycleComponent,
    Child1Component,
    Child2Component,
    ViewEncapsulationComponent,
    ViewEncapsulationChild1Component,
    InterpolationComponent,
    ComponentInteractionComponent,
    ComponentInteractionChildComponent,
    VotersComponent,
    VoteTakerComponent,
    ViewChildComponent,
    VoteTakerComponent,
    ComponentStyleComponent,
    DynamicComponentsLoadingComponent,
    AdBannerComponent,
    AdDirective,
    HeroProfileComponent,
    HeroJobComponent,
    PipeExampleComponent,
    FilterPipe,
    PropertyBindingComponent,
    AttrClassStyleBindingComponent,
    TwoWayBindingComponent,
    TwoWayBindingChildComponent,
    SizerComponent,
    TemplateRefVarComponent,
    TemplateRefVarChildComponent,
    SvgAsTemplateComponent,
    BuildInDirectivesComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    AttributeDirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

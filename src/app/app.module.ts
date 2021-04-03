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
import { StructuralDirectiveExampleComponent } from './components/structural-directive-example/structural-directive-example.component';
import { StructuralDirectiveComponent } from './components/structural-directive-example/structural-directive/structural-directive.component';
import { UnlessDirective } from './directives/unless.directive';
import { PostComponent } from './components/component-lifecycle/post/post.component';
import { CommentComponent } from './components/component-lifecycle/post/comment/comment.component';
import { HostSelectorComponent } from './components/host-selector/host-selector.component';
import { ChildComponent } from './components/host-selector/child/child.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { LoggerService } from './dependency-injection/services/logger.service';
import { HeroService } from './dependency-injection/services/hero.service';
import { HeroComponent } from './dependency-injection/components/hero/hero.component';
import { DependencyInjectionExampleComponent } from './dependency-injection/components/dependency-injection-example/dependency-injection-example.component';
import { BetterLogger } from './dependency-injection/services/better-logger';
import { EvenBetterLogger } from './dependency-injection/services/even-better-logger';
import { forwardRef } from '@angular/core';
import {
  APP_CONFIG,
  HERO_DI_CONFIG,
  SilentLogger,
} from './dependency-injection/services/silent-logger';
import { UserService } from './dependency-injection/services/user.service';
import { LogService } from './dependency-injection/services/log.service';

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
    AttributeDirectiveExampleComponent,
    StructuralDirectiveExampleComponent,
    StructuralDirectiveComponent,
    UnlessDirective,
    PostComponent,
    CommentComponent,
    HostSelectorComponent,
    ChildComponent,
    AsyncPipeComponent,
    HeroComponent,
    DependencyInjectionExampleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    // { provide: LoggerService, useClass: LoggerService },
    { provide: HeroService, useClass: HeroService },
    // { provide: LoggerService, useClass: BetterLogger },
    { provide: LoggerService, useClass: EvenBetterLogger },
    { provide: EvenBetterLogger, useExisting: LoggerService },
    // { provide: EvenBetterLogger, useClass: HeroComponent },
    // { provide: LoggerService, useValue: SilentLogger },
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },

    // { provide: UserService, useClass: UserService }, //wrong
    // LogService,
    {
      provide: UserService,
      // deps: [LogService],
      useFactory: (logger: LogService) => {
        const log = new LogService();
        return new UserService(log);
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

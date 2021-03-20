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
    VoteTakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

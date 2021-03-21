import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-component-interaction',
  template: `
      <!-- <app-component-interaction-child 
        *ngFor="let user of users;" 
        [name]="user.username" 
        [user]="user"> 

      </app-component-interaction-child>

      <hr>
      <hr>

      <app-component-interaction-child
        [name]="fullName"
        [user]="user"
      >
      </app-component-interaction-child> -->

      <!-- <div class='vt-tkr'>
        <app-vote-taker></app-vote-taker>
      </div> -->



     

      <div class='vt-tkr'>

        <ul>
          <li #templateRefVar>this is first element</li>
        </ul>

        <!-- <div class="lessons-list" *ngIf="false else loading">
          ... 
        </div>   -->

        <ng-template #loading>
          <div>Loading...</div>
        </ng-template>

        <app-view-child></app-view-child>
      </div>


  `,
  styles: [`
    .vt-tkr {
      margin: 10px;
      border: 1px orange solid;
      background-color: orange;
    }
  `],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentInteractionComponent implements OnInit, AfterViewInit {

  public user = { "id": 1, "username": "Tamrakar Himanshu" };
  public fullName = 'Himanshu Tamrakar';

  public users = [
    { "id": 1, "username": "Bret" },
    { "id": 2, "username": "Antonette" },
    { "id": 3, "username": "Samantha" },
    { "id": 4, "username": "Karianne" },
    { "id": 5,"username": "Kamren"  }
  ]


  @ViewChild(ViewChildComponent) viewChildInstance: ElementRef;
  @ViewChild('templateRefVar') templateRefVar;
  @ViewChild('loading', {read: ViewContainerRef}) ngTemplateRefVar;

  @ViewChild('loading', {read: TemplateRef}) ngTemplateRefVar1;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.viewChildInstance['fullName']);
    console.dir(this.templateRefVar.nativeElement.innerText);
    console.log(this.ngTemplateRefVar);
    console.log(this.ngTemplateRefVar1);


  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   //  this.users[0].username = 'john'
    //   // this.fullName = 'John';
    //   this.user.username = 'TickTok'
    // }, 3000)
  }


}

import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-build-in-directives',
  template: `
    <div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>
    <div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>
    <div [class]="currentClasses">This div is initially saveable, unchanged, and special.</div>


    <div [ngStyle]="currentStyles">
      This div is initially italic, normal weight, and extra large (24px).
    </div>

    <div [style]="currentStyles">
      This div is initially italic, normal weight, and extra large (24px).
    </div>


    <div style="background-color: orangered; padding: 10px;">
      <p>ngIF</p>

      <div *ngIf="true">Content to render when condition is true.</div>
      <!-- <ng-template [ngIf]="true"><div>Content to render when condition is
true.</div></ng-template> -->


      <div *ngIf="false; else elseTemp">IF</div>
      <div *ngIf="true; then thenTemp; else elseTemp"></div>

      <div *ngIf="true as value">{{value}}</div>

      <ng-template #thenTemp>
        <div>
          Then 
        </div>
         
      </ng-template>
      <ng-template #elseTemp>
        <div>
          Else
        </div>  
      </ng-template>

      <!-- getting reference from class -->
      <div *ngIf="true; then thenBlock"></div> 

      <ng-template #primaryBlock>Primary text to show</ng-template>
      <ng-template #secondaryBlock>Secondary text to show</ng-template>
      <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>

    </div>


    <section>
          <h4>ngFor</h4>
          <ng-container *ngFor="let user of users; let i = index;" >
            <span *ngIf="user.username !== 'Bret'">  
              {{i +1}} : {{user.username | uppercase}}
            </span>
          </ng-container>    
    </section>


    <section>
          <h4>ngFor with trackBy</h4>
          <ng-container *ngFor="let user of array; let i = index; trackBy: identify" >
            <div>  
              {{i +1}} : {{user | json | uppercase}}
            </div>
          </ng-container>   
          
          <button (click)="foo()">foo</button>
          <button (click)="add()">add</button>
    </section>


  `,
  styles: [`
    .special {
      color: red;
    }
    .saveable {
      margin: 20px;
      
    }
    .modified {
      font-family: Arial;
      
    }

    section {
      background-color: indianred;
      padding: 10px;
    }

  `]
})
export class BuildInDirectivesComponent implements OnInit {
  public users = [
    { "id": 1, "username": "Bret" },
    { "id": 2, "username": "Antonette" },
    { "id": 3, "username": "Samantha" },
    { "id": 4, "username": "Karianne" },
    { "id": 5,"username": "Kamren"  }
  ]
  isSpecial = true;
  currentClasses: {};

  canSave = true;
  isUnchanged = true;

  thenBlock: TemplateRef<any>|null = null;

  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any> | null = null;
  @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;

  currentStyles: {};

  constructor() { }
  // ngAfterViewInit(): void {
  //   console.log(this.thenTemp);
  // }

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles()

    this.thenBlock = this.primaryBlock;

  }
  
/* . . . */
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }


  array = [
    { "id": 1, "name": "bill" },
    { "id": 2, "name": "bob" },
    { "id": 3, "name": "billy" }
 ]

 foo() {
    this.array = [
       { "id": 1, "name": "foo" },
       { "id": 2, "name": "bob" },
       { "id": 3, "name": "billy" }
    ]
 }

 count = 4;

 add() {
    let boj = {  
      "id": this.count++, 
      'name': new Date().getTime() + ""
    }
    this.array.push(boj)
 }

 identify(index, item) {
    return item.id;
 }

  

}

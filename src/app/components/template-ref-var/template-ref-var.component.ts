import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplateRefVarChildComponent } from './template-ref-var-child/template-ref-var-child.component';

@Component({
  selector: 'app-template-ref-var',
  template: `
    <div>
      Template Ref Variable:
    </div>

    <div>
      <input #phone type='text' placeholder="Enter Phone Number" >
      <button type="submit" (click)="onClick(phone)">Click</button>
    </div>

    <div>
      <p>
        If you declare the variable on a component, the variable refers to the component instance.
      </p>
      <app-template-ref-var-child #componentRef></app-template-ref-var-child>
      <button type="submit" (click)="onClick(componentRef)">Click</button>
    </div>

    <div>
      <p #elemRef>
        If you declare the variable on a standard HTML tag, the variable refers to the element
      </p>
      <button type="submit" (click)="onClickElement(elemRef)">Click</button>
    </div>

    <div>
      <p>
        If you declare the variable on an 
        &lt;ng-template&gt; element, the variable refers to a TemplateRef instance, which represents the template. 
      </p>

      <ng-template #ngTemplateRef>

      </ng-template>
      <button type="submit" (click)="onClickTemplateRef(ngTemplateRef)">Click</button>
    </div>

    <div>
      <p>
        If the variable specifies a name on the right-hand side, such as #var="ngModel", the variable refers to the directive or component on the element with a matching exportAs name.
      </p>

      <form #itemForm="ngForm" (ngSubmit)="onSubmit(itemForm)">
        <label for="name">Name <input class="form-control" name="name" ngModel required />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div [hidden]="!itemForm.form.valid">
        <p>{{ submitMessage }}</p>
      </div>

     
    </div>


    
  `,
  styles: [ `
    div {
      background-color: cornflowerblue;
      margin: 10px;
      color: white;
      padding: 10px;
    }

    p {
      font-size: 18px;
      font-weight: bold;
    }
  `]
})
export class TemplateRefVarComponent {

  componentRef: any; // Scope is different thats why two componentRef

  // This is same as #componentRef
  @ViewChild(TemplateRefVarChildComponent) templateRef: TemplateRefVarChildComponent;

  @ViewChild('ngTemplateRef') tempRef;

  submitMessage = 'submitMessage';

  constructor() { }

  onClick(elementRef: any) {
    console.log(this.componentRef);
    console.log(this.templateRef);
    console.dir(elementRef);
  }

  onClickElement(elemRef: any) {
    console.dir(elemRef);
  }

  onClickTemplateRef(templateRef) {
    console.log(templateRef);
    console.log(this.tempRef);
  }

  onSubmit(itemForm) {
    console.log(itemForm.form);
  }



}

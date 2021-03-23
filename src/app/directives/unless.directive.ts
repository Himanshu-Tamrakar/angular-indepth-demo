import { AfterContentInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private el: TemplateRef<any>, private vc: ViewContainerRef) {}

  @Input() 
  set appUnless(condition: boolean) {
    if (!condition) {
      this.vc.createEmbeddedView(this.el);
      // this.hasView = true;
    } else if (condition) {
      this.vc.clear();
      // this.hasView = false;
    }
  }

}
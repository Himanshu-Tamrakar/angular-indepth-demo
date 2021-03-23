import { Input, Directive, ElementRef, HostListener, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() appHighlight: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @HostListener('mouseenter', ['$event'])
  public onMouseHover(event: MouseEvent) {
      this.highlight(this.appHighlight || this.defaultColor);
  }

  @HostListener('mouseleave', ['$event'])
  public onMouseLeave(event: MouseEvent) {
      this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

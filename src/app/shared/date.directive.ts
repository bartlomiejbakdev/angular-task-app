import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private p;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.p = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    this.p.innerHTML = 'created at: ' + this.date.toLocaleDateString() + ' ' + this.date.toLocaleTimeString();
    this.renderer.appendChild(this.el.nativeElement, this.p);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.p);
  }
}

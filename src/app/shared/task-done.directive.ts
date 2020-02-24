import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTaskDone]'
})
export class TaskDoneDirective implements OnInit {


  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    const li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/check-icon.jpg)');
  }

}

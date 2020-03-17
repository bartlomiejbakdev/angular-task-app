import {Directive, HostListener, Input, ElementRef, Renderer2} from '@angular/core';
import {ListService} from '../services/list.service';


// @ts-ignore
@Directive({
    selector: '[appDate]'
})
export class DateDirective {

    constructor(private el: ElementRef, private renderer: Renderer2, private sList: ListService) {
        this.p = this.renderer.createElement('button');
        this.p.style.border = 'none';
        this.p.style.backgroundColor = 'inherit';
        this.p.style.padding = '14px 28px';
        this.p.style.fontSize = '16px';
        this.p.style.cursor = 'pointer';
        this.p.style.display = 'inline-block';
        this.p.style.color = 'red';
        this.p.style.marginLeft = '280px';
        this.p.addEventListener('click', () => {
            sList.removeTask(this.date);
        });


    }

    @Input()
    private date: number;
    private p;


    @HostListener('mouseenter')
    mouseenter(eventDate: Event) {
        this.p.innerHTML = 'REMOVE';
        this.renderer.appendChild(this.el.nativeElement, this.p);
    }

    @HostListener('click', ['$event.target'])
    onClick(btn) {
        this.sList.doTask(this.date);
    }

    @HostListener('mouseleave')
    mouseleave(eventDate: Event) {
        this.renderer.removeChild(this.el.nativeElement, this.p);
    }
}

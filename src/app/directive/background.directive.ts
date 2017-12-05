import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input() hoverColor = 'green';
  @Input() defaultColor = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'backgroundColor', 'coral');
    // this.renderer.addClass(nativeElement, 'white-text');
  }

  @HostListener('mouseenter')
  mouseEnter(event: Event) {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'backgroundColor', 'coral');
    this.background = this.hoverColor;
  }


  @HostListener('mouseleave')
  mouseLeave(event: Event) {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'backgroundColor', 'transparent');
    this.background = this.defaultColor;
  }

}



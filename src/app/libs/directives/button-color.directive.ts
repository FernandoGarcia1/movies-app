import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})
export class ButtonColorDirective {

  @HostListener('mouseenter') mouseenter(){
    this.renderer.removeClass(this.element.nativeElement, 'btn-primary');    
    this.renderer.addClass(this.element.nativeElement, 'btn-success');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.removeClass(this.element.nativeElement, 'btn-success');
    this.renderer.addClass(this.element.nativeElement, 'btn-primary');
  }
  constructor(private renderer: Renderer2, private element: ElementRef) { }

}

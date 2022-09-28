import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImgOpacity]'
})
export class ImgOpacityDirective {

  @HostListener('mouseenter') mouseenter(){
    this.renderer.addClass(this.element.nativeElement, 'img-opacity');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.removeClass(this.element.nativeElement, 'img-opacity');
  }
  constructor(private renderer: Renderer2, private element: ElementRef) { }

}

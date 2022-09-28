import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsPipe } from './pipes/stars.pipe';
import { TextSmallPipe } from './pipes/text-small.pipe';
import { ImgOpacityDirective } from './directives/img-opacity.directive';
import { ButtonColorDirective } from './directives/button-color.directive';



@NgModule({
  declarations: [
    StarsPipe,
    TextSmallPipe,
    ImgOpacityDirective,
    ButtonColorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarsPipe,
    TextSmallPipe,
    ImgOpacityDirective,
    ButtonColorDirective,
  ]
})
export class LibsModule { }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSmall'
})
export class TextSmallPipe implements PipeTransform {

  transform(text: string, ...args: unknown[]): string{
    if(text === ''){
      return 'Sin información disponible.';
    }else{
      return text.substring(0,100)+'...';
    }    
  } 
}

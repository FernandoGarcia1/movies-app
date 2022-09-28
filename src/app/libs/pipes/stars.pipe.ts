import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(average: number, ...args: unknown[]): string {
    let stars='';
    let count = 0;
    while (count < Math.round(average)) {
      stars += '★';
      count++;
    }
    return stars;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    if (words.length <= limit) {
      return value;
    }

    return words.slice(0, limit).join(' ') + '...';
  }

}

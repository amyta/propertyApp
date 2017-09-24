import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
})

export class PluralPipe implements PipeTransform {

  transform(value: number) {
    if (value > 1) {
      return value + ' days before due';
    } else

    return value + ' day before due'
  }
}

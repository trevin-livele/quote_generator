import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreate'
})
export class DateCreatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

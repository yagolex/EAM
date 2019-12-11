import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

const MINS_IN_HOUR: number = 60;

@Pipe({
  name: 'getDuration'
})
export class GetDurationPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value == null || !isNumber(value) || value <= 0) {
      return '';
    }
    const minutes = value % MINS_IN_HOUR;
    const hours = Math.trunc(value / MINS_IN_HOUR);
    return `${hours}h ${minutes}min`;
  }
}

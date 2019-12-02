import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model/user';

@Pipe({
  name: 'getFullName'
})
export class GetFullNamePipe implements PipeTransform {
  transform(value: User, ...args: any[]): any {
    if (value == null || value === undefined) {
      return '';
    }
    return `${value.firstName} ${value.lastName}`;
  }
}

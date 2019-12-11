import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses/models/course';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(arrayToFilter: Course[], searchCriteria: string): Course[] {
    return arrayToFilter.filter(item => item.title.indexOf(searchCriteria) !== -1);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ICourseItem } from './model/i-course-item';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(arrayToFilter: ICourseItem[], searchCriteria: string): ICourseItem[] {
    return arrayToFilter.filter(item => item.title.indexOf(searchCriteria) !== -1);
  }
}

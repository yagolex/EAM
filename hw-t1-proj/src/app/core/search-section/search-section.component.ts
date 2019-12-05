import { Component, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { LoggerService } from '../../shared/models/logger.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnChanges {
  @Output() searchCourseItemEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private logger: LoggerService) {}
  public searchCriteria: string = '';

  public search() {
    this.logger.log(
      `SearchSectionComponent - searchCourseItemEvent - searchCriteria - ${this.searchCriteria}`
    );
    this.searchCourseItemEvent.emit(this.searchCriteria);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(`SearchSectionComponent - ngOnChanges - ${changes}`);
  }
}

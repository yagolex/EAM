import {
  Component,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

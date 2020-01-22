import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSectionComponent {
  @Output() searchCourseItemEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private logger: LoggerService) {}
  private searchControl: FormControl;
  private debounce: number = 400;

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounce),
        distinctUntilChanged(),
        filter((scValue: string) => scValue.length >= 3 || scValue.length === 0)
      )
      .subscribe(searchCriteriaQuery => {
        this.logger.log(
          `SearchSectionComponent - searchControl - valueChanges - ${searchCriteriaQuery}`
        );
        this.searchCourseItemEvent.emit(searchCriteriaQuery);
      });
  }
}

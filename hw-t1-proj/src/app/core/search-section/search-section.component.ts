import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSectionComponent implements OnInit, OnDestroy {
  @Output() searchCourseItemEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private logger: LoggerService) {}
  private searchControl: FormControl;
  private debounce: number = 400;
  private sub: Subscription;

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.sub = this.searchControl.valueChanges
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

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

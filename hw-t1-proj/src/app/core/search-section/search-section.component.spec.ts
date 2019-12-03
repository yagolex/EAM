import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../model/logger.service';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      imports: [FormsModule],
      providers: [LoggerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

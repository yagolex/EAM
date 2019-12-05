import { CourseItemBorderDirective } from './course-item-border.directive';
import { ElementRef, Component, HostListener } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

// Simple test component that will not in the actual app
@Component({
  template: '<p dtCapitalize>Testing Directives is awesome!</p>'
})
class TestComponent {
  // clickCount is not necessary but it's used here to verify that the component
  // is actually getting clicked
  clickCount = 0;

  constructor() {}

  // allows us to listen to click events on the main wrapper element of our component
  @HostListener('click')
  onClick() {
    this.clickCount = ++this.clickCount; // increment clickCount
  }
}

describe('CourseItemBorderDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CourseItemBorderDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  // it('should create an instance', () => {
  //   //const directive = new CourseItemBorderDirective();
  //   expect(directive).toBeTruthy();
  // });
});

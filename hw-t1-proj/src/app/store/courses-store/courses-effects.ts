import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { CourseService } from 'src/app/courses/services/course.service';
import {
  ECoursesActionTypes,
  LoadCoursesAction,
  LoadCoursesFailureAction,
  LoadCoursesSuccessAction
} from './courses-actions';

@Injectable()
export class CoursesEffects {
  constructor(private courseService: CourseService, private actions$: Actions) {}
  // this.start, DEFAULT_COUNT, this.searchCriteria

  @Effect()
  loadCoursesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoadCoursesAction>(ECoursesActionTypes.LOAD_COURSES),
    // startWith(new LoadCoursesAction()),
    switchMap(action =>
      this.courseService.getCourseList(0, 10, null).pipe(
        map(
          items =>
            new LoadCoursesSuccessAction({
              items
            })
        ),
        catchError(error => observableOf(new LoadCoursesFailureAction({ error })))
      )
    )
  );
}

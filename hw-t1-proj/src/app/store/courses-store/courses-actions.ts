import { Action } from '@ngrx/store';
import { Course } from 'src/app/courses/models/course';

export enum ECoursesActionTypes {
  LOAD_COURSES = '[COURSES] Load Request',
  LOAD_COURSES_FAILURE = '[COURSES] Load Failure',
  LOAD_COURSES_SUCCESS = '[COURSES] Load Success'
}
export class LoadCoursesAction implements Action {
  readonly type = ECoursesActionTypes.LOAD_COURSES;
}
export class LoadCoursesFailureAction implements Action {
  readonly type = ECoursesActionTypes.LOAD_COURSES_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class LoadCoursesSuccessAction implements Action {
  readonly type = ECoursesActionTypes.LOAD_COURSES_SUCCESS;
  constructor(public payload: { items: Course[] }) {}
}
export type CoursesActions =
  | LoadCoursesAction
  | LoadCoursesFailureAction
  | LoadCoursesSuccessAction;

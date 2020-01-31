import { RouterReducerState } from '@ngrx/router-store';
import { CoursesState, initialCoursesState } from './courses-store/courses-state';

export interface RootState {
  router?: RouterReducerState;
  courseList: CoursesState;
}

export const initialRootState: RootState = {
  courseList: initialCoursesState
};

export function getInitialRootState(): RootState {
  return initialRootState;
}

import { RootState } from '../root-state';
import { createSelector } from '@ngrx/store';
import { CoursesState } from './courses-state';

const selectCourses = (state: RootState) => state.courseList;

export const selectCourseList = createSelector(
  selectCourses,
  (state: CoursesState) => state.courseList
);

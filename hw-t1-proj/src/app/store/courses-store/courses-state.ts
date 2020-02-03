import { Course } from 'src/app/courses/models/course';

export interface CoursesState {
  courseList: Course[] | null;
}

// tslint:disable-next-line: one-variable-per-declaration
export const initialCoursesState: CoursesState = {
  courseList: null
};

import { ActionReducerMap } from '@ngrx/store';
import { RootState } from './root-state';
import { routerReducer } from '@ngrx/router-store';
import { CoursesReducers as coursesReducers } from './courses-store/courses-reducers';

export const rootReducers: ActionReducerMap<RootState, any> = {
  router: routerReducer,
  courseList: coursesReducers
};

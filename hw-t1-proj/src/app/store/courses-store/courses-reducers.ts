import { CoursesState, initialCoursesState } from './courses-state';
import { CoursesActions, ECoursesActionTypes } from './courses-actions';

export const CoursesReducers = (
  state: CoursesState = initialCoursesState,
  action: CoursesActions
): CoursesState => {
  switch (action.type) {
    case ECoursesActionTypes.LOAD_COURSES_SUCCESS: {
      return {
        ...state,
        courseList: action.payload.items
      };
    }
    default:
      return state;
  }
};

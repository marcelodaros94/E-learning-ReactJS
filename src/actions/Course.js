import {
    fetchCoursesLoading,
    fetchCoursesSuccess,
    fetchCoursesFail
  } from "../features/coursesSlice";

import CoursesService from '../services/courses'

export const fetchAll = () => async (dispatch) => {
    dispatch(fetchCoursesLoading());
    try {
        const result = await CoursesService.getCourses();
        result.length &&
        dispatch(fetchCoursesSuccess(result));
    } catch (error) {
        dispatch(fetchCoursesFail(error.message));
    }
};
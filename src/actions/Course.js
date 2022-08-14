import {
    fetchCoursesLoading,
    fetchCoursesSuccess,
    fetchCoursesFail,
    fetchSingleCourseLoading,
    fetchSingleCourseSuccess,
    fetchSingleCourseFail
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

export const fetchSingleCourse = (id) => async (dispatch) => {
    dispatch(fetchSingleCourseLoading());
    try {
        const result = await CoursesService.getCourse(id);
        result &&
        dispatch(fetchSingleCourseSuccess(result));
    } catch (error) {
        dispatch(fetchSingleCourseFail(error.message));
    }
};
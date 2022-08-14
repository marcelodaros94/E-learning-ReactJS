import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
    name: "courses",
    initialState:{
        courses: [],
        loader: false,
        error: '',
        currentCourse: {
          sessions: []
        }
    },
    reducers:{
        fetchCoursesLoading: (state) => {
          state.loader = true;
        },
        fetchCoursesSuccess: (state, action) => {
          state.courses = action.payload;
          state.loader = false;
          state.error = ''
        },
        fetchCoursesFail: (state, { payload }) => {
          state.loader = false;
          state.error = payload;
        },
        fetchSingleCourseLoading: (state) => {
          state.loader = true;
        },
        fetchSingleCourseSuccess: (state, { payload }) => {
          state.currentCourse = payload;
          state.loader = false;
          state.error = "";
        },
        fetchSingleCourseFail: (state, { payload }) => {
          state.loader = false;
          state.error = payload;
        },
        updateSessions: (state, { payload }) => {
          state.currentCourse.sessions[payload].porcentaje = 100;
        }
    }
})

export const { 
    fetchCoursesLoading,
    fetchCoursesSuccess,
    fetchCoursesFail,
    fetchSingleCourseLoading,
    fetchSingleCourseSuccess,
    fetchSingleCourseFail,
    updateSessions
} = coursesSlice.actions;

export default coursesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
    name: "courses",
    initialState:{
        courses: [],
        loader: false,
        error: ''
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
        }
    }
})

export const { 
    fetchCoursesLoading,
    fetchCoursesSuccess,
    fetchCoursesFail
} = coursesSlice.actions;

export default coursesSlice.reducer;
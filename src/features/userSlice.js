import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        loader: false,
        error: []
    },
    reducers:{
        loginPending: (state) => {
          state.loader = true;
        },
        loginSuccess: (state, { payload }) => {
          state.loader = false;
          state.user = payload;
          state.error = "";
        },
        loginFail: (state, { payload }) => {
          state.loader = false;
          state.error = payload;
        },
        logoutPending: (state) => {
            state.loader = true;
        },
        logoutSuccess: (state, { payload }) => {
            state.loader = false;
            state.user = null;
            state.error = "";
        },
        logoutFail: (state, { payload }) => {
            state.loader = false;
            state.error = payload;
        }
    }
})

export const { loginPending, loginSuccess, loginFail, logoutPending, logoutSuccess, logoutFail } = userSlice.actions;

//it will help us to grab the data
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
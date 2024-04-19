// import { createSlice } from '@reduxjs/toolkit'

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     access_token: undefined,
//   },
//   reducers: {

//     set_user_email: (state, action) => {
//         state.email = action.payload; // Set email for Registration & Validation
//       },

//     login_user: (state, action) => {
//       state.access_token = action.payload
//     },
//     logout_user: (state) => {
//       state.access_token = null
//     },
//   },
// })

// export const { login_user, logout_user, set_user_email } = userSlice.actions

// export default userSlice.reducer


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initializeUser = createAsyncThunk('user/initialize', async (_, { dispatch }) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        dispatch(loginUser({ user, accessToken }));
    }
});


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { id: 0, email: null },
    accessToken: undefined,
    avatar: null,
    isLoggedIn: false
  },

  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      localStorage.setItem('token', action.payload.accessToken);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logoutUser: (state) => {
      state.user = { id: 0, email: null };
      state.accessToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setUserObject: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    }
  },
});

export const { loginUser, logoutUser, setUserObject, setEmail, setAvatar } = userSlice.actions;
export default userSlice.reducer;
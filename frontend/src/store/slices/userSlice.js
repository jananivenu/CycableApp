import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    access_token: undefined,
  },
  reducers: {
    
    set_user_email: (state, action) => {
        state.email = action.payload; // Set email for Registration & Validation
      },

    login_user: (state, action) => {
      state.access_token = action.payload
    },
    logout_user: (state) => {
      state.access_token = null
    },
  },
})

export const { login_user, logout_user, set_user_email } = userSlice.actions

export default userSlice.reducer

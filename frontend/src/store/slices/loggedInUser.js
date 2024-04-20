import { createSlice } from "@reduxjs/toolkit";

export const loggedInUser = createSlice({
    name: 'current-user',
    initialState: {user: {id: 0}, token: undefined, accessToken: undefined, avatar: null, logedIn: false},
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
        },
        logoutUser: (state) => {
            state.user = {id: 0}
            state.accessToken = null
            state.logedIn = false;
        },

        userObject: (state, action) => {
            state.user = action.payload;
            state.logedIn = true;
            // console.log(state.user)
        },
        setAvatar: (state, action) => {
            state.friendList = action.payload;
        }
    },
})

export const {loginUser, logoutUser, userObject, setAvatar} = loggedInUser.actions
export default loggedInUser.reducer
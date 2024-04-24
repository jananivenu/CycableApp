import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import reportsReducer from './slices/reportsSlice'
import createReportsReducer from './slices/reportCreateSlice'
import commentsSlice from './slices/commentsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        reports: reportsReducer,
        report: createReportsReducer,
        comments: commentsSlice
    }
})


export default store

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import reportsReducer from './slices/reportsSlice'
import createReportsReducer from './slices/reportCreateSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        reports: reportsReducer,
        report: createReportsReducer
    }
})


export default store

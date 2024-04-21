import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import reportsReducer from './slices/reportsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    reports: reportsReducer
  },
})

export default store

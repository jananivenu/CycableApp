import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  description: '',
  longitude: 0.0,
  latitude: 0.0,
  address: '',
  use_current_time: false,
  custom_date: '',
  images: [],
  was_police_called: false,
  involved_parties: '',
  was_bicycle_locked: false,
  change_to_add: '',
}

const commonFields = [
  'description',
  'longitude',
  'latitude',
  'address',
  'use_current_time',
  'custom_date',
  'images',
]

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setCommonFields: (state, action) => {
      const payload = action.payload
      commonFields.forEach((field) => {
        if (field in payload) {
          state[field] = payload[field]
        }
      })
    },
    setTheftReport: (state, action) => {
      state.was_bicycle_locked = action.payload.was_bicycle_locked
    },
    setAccidentReport: (state, action) => {
      state.was_police_called = action.payload.was_police_called
      state.involved_parties = action.payload.involved_parties
    },
    setNearMissReport: (state, action) => {
      state.involved_parties = action.payload.involved_parties
    },
    setViolationsReport: (state, action) => {
      state.change_to_add = action.payload.change_to_add
    },
  },
})

export const {
  setCommonFields,
  setTheftReport,
  setAccidentReport,
  setNearMissReport,
  setViolationsReport,
} = reportSlice.actions
export default reportSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  description: '',
  longitude: 0.0,
  latitude: 0.0,
  address: '',
  involved_parties: '',
  custom_date: '',
  was_police_called: '',
  was_bicycle_locked: '',
  change_to_add: '',
}

const commonFields = [
  'description',
  'longitude',
  'latitude',
  'address',
  'custom_date',
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
      if (action.payload.was_bicycle_locked !== undefined) {
        state.was_bicycle_locked = action.payload.was_bicycle_locked
      }
    },
    setAccidentReport: (state, action) => {
      if (action.payload.was_police_called !== undefined) {
        state.was_police_called = action.payload.was_police_called
      }
      if (action.payload.involved_parties !== undefined) {
        state.involved_parties = action.payload.involved_parties
      }
    },
    setNearMissReport: (state, action) => {
      if (action.payload.involved_parties !== undefined) {
        state.involved_parties = action.payload.involved_parties
      }
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

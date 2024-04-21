import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReports } from '../../axios/fetchReports';

export const fetchReportsAsync = createAsyncThunk(
  'reports/fetchReports',
  async (reportId, { rejectWithValue }) => {
    try {
      const data = await fetchReports(reportId);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const selectReportById = (state, reportId) => {
    console.log(state)

  return state.reports.reports.find(report => report.id === Number(reportId));
};

const initialState = {
  reports: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReportsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reports = action.payload;
      })
      .addCase(fetchReportsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : null;
      });
  },
});

export default reportsSlice.reducer;
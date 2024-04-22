import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReports } from '../../axios/fetchReports';

// All
export const fetchAllReportsAsync = createAsyncThunk(
  'reports/fetchAllReports',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchReports();
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// by ID
export const fetchReportsAsync = createAsyncThunk(
  'reports/fetchReports',
  async (reportId, { rejectWithValue }) => {
    try {
      const data = await fetchReports(reportId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const initialState = {
  reports: [],
  currentReport: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // All
      .addCase(fetchAllReportsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllReportsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reports = action.payload;
      })
      .addCase(fetchAllReportsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : null;
      })
      // by ID
      .addCase(fetchReportsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReportsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentReport = action.payload;
      })
      .addCase(fetchReportsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : null;
      });
  },
});

export default reportsSlice.reducer;
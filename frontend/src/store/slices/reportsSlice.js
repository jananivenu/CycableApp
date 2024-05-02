import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReports, deleteReport } from '../../axios/fetchReports';

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

// By user ID
export const fetchReportsByUserIdAsync = createAsyncThunk(
  'reports/fetchReportsByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await fetchReports(null, userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Fetch Reports by Coordinates
export const fetchReportsByCoordinatesAsync = createAsyncThunk(
  'reports/fetchReportsByCoordinates',
  async (coords, { rejectWithValue }) => {
    try {
      const data = await fetchReports(null, null, coords);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


const initialState = {
  reports: [],
  currentReport: null,
  userReports: [],
  status: 'idle',
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
      })

      //by user
      .addCase(fetchReportsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReportsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userReports = action.payload;
      })
      .addCase(fetchReportsByUserIdAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : null;
      })

      // by Coordinates
      .addCase(fetchReportsByCoordinatesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReportsByCoordinatesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reports = action.payload;
      })
      .addCase(fetchReportsByCoordinatesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : null;
      });
  },
});

export const deleteReportAsync = createAsyncThunk(
  'reports/deleteReport',
  async (reportId, { rejectWithValue }) => {
    try {
      // Call your API function to delete the report
      await deleteReport(reportId);
      return reportId; // Return the reportId if deletion is successful
    } catch (error) {
      // If deletion fails, reject the promise with the error message
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

    

export default reportsSlice.reducer;
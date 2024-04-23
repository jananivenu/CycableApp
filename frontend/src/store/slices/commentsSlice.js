import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments } from '../../axios/fetchComments';

export const fetchCommentsAsync = createAsyncThunk(
    'comments/fetchComments',
    async (reportId, { rejectWithValue }) => {
        try {
            const data = await fetchComments(reportId);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

const initialState = {
    comments: [],
    status: 'idle',
    error: null
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            })
            .addCase(fetchCommentsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ? action.payload.error : null;
            });
    },
});

export default commentsSlice.reducer;
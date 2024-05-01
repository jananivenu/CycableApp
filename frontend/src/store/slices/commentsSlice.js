import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments } from '../../axios/fetchComments';
import { addComment } from '../../axios/addComment';
import { deleteComment } from '../../axios/deleteComment';

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

export const addCommentAsync = createAsyncThunk(
    'comments/addComment',
    async ({ reportId, commentData }, { rejectWithValue }) => {
        try {
            const data = await addComment(reportId, commentData);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const deleteCommentsAsync = createAsyncThunk(
    'comments/deleteComment',
    async (commentId, { rejectWithValue }) => {
        try {
            await deleteComment(commentId);
            return commentId;
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
            // Fetch comments
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
            })

            // Add comment
            .addCase(addCommentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCommentAsync.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addCommentAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ? action.payload.error : null;
            })

            .addCase(deleteCommentsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCommentsAsync.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(deleteCommentsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ? action.payload.error : null;
            });
    },
});

export default commentsSlice.reducer;
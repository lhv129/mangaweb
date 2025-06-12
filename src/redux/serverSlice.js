import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '@apis/axiosClient';

// Async thunk: Lấy danh sách server từ API
export const fetchServers = createAsyncThunk('server/fetchServers', async () => {
    const res = await axiosClient.get('/');
    return res.data.endpoints;
});

const getStoredServer = () => localStorage.getItem('selectedServer');

const serverSlice = createSlice({
    name: 'server',
    initialState: {
        selectedServer: getStoredServer(),
        endpoints: null,
        status: 'idle', // 'loading' | 'success' | 'error'
    },
    reducers: {
        selectServer: (state, action) => {
            state.selectedServer = action.payload;
            localStorage.setItem('selectedServer', action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServers.fulfilled, (state, action) => {
                state.endpoints = action.payload;
                if (!state.selectedServer) {
                    state.selectedServer = Object.keys(action.payload)[0]; // Chọn server đầu tiên nếu chưa có
                    localStorage.setItem('selectedServer', state.selectedServer);
                }
                state.status = 'success';
            })
            .addCase(fetchServers.rejected, (state) => {
                state.status = 'error';
            });
    }
});

export const { selectServer } = serverSlice.actions;
export default serverSlice.reducer;
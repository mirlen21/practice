import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios.orders'

export const orderFetch = createAsyncThunk(
    'order/fetch',
    async (limit, { rejectWithValue}) => {

        try {
            const res = await axios.get(`/novostis?pagination[pageSize]=${limit}&populate=image`)
            console.log(res.data);
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const orderFetchById = createAsyncThunk(
    'order/byId',
    async (id, { rejectWithValue}) => {
            console.log('fetch');
            try {
                const res = await axios.get(`/novostis/${id}`)
                return res.data.data
            } catch (error) {
                return rejectWithValue(error)
            }
    }
)
export const orderSend = createAsyncThunk(
    'order/send',
    async (order, { rejectWithValue}) => {
        try {
            // const token = getState().auth.user.token
            const res = await axios.post('/novostis', order) 
            // {
            //     headers:{
            //         Authorization: `Bearer ${token}`
            //     }
            // });
            if (!res.data) {
                throw new Error()
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        loading: '',
        error: null,
        orders: [],
        moreInfo: {},
    },
    extraReducers: {
        [orderFetch.pending]: (state) => {
            state.loading = 'Loading'
        },
        [orderFetch.fulfilled]: (state, action) => {
            state.loading = 'complete'
            state.orders = action.payload.data
        },

        [orderFetch.rejected]: (state, action) => {
            state.loading = 'fail';
            state.error = action.error
        },
        [orderFetchById.pending]: (state) => {
            state.loading = 'Loading'
        },
        [orderFetchById.fulfilled]: (state, action) => {
            state.loading = 'complete'
            state.moreInfo = action.payload
        },
        [orderFetchById.rejected]: (state, action) => {
            state.loading = 'fail';
            state.error = action.error
        },
    }
})
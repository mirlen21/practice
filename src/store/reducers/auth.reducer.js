import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../api/axios.orders'

export const fetchUser = createAsyncThunk(
    'auth/fetch',
    async (user, {rejectWithValue}) => {
        try {
            console.log(user);
            const res = await axios.post('auth/local', user)
            if (!res.data) {
                throw new Error()
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading: '',
        user: null
    },
    reducers:{
        exitLogin: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = 'complete'
        },
        [fetchUser.rejected]: (state) => {
            state.loading = 'error'
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.loading = 'complete'
            state.user = {
                token: action.payload.jwt,
                ...action.payload.user
            }
        }
    }
})

export const {exitLogin} = authSlice.actions
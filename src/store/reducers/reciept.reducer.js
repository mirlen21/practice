import { createSlice } from '@reduxjs/toolkit';


export const newsSlice = createSlice({
  name: "reciept",
  initialState: {
    news: []
  },
  reducers: {
    addNews: (state, action) => {
        state.news.push(action.payload)
    }
  },
});

export const { addNews } = newsSlice.actions;

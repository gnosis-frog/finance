import { createSlice } from '@reduxjs/toolkit';

const tickerSlice = createSlice({
  name: 'ticker',
  initialState: { tickers: [] },
  reducers: {
    updateTicker(state, action) {
      let temp_tickers = action.payload.map((ticker, index) => {
        return {
          ...ticker,
          changePositive:
            state.tickers.length > 0 &&
            ticker.price > state.tickers[index].price,
        };
      });
      state.tickers = temp_tickers;
    },
  },
});

export const tickerActions = tickerSlice.actions;

export default tickerSlice;

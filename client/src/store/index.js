import { configureStore } from '@reduxjs/toolkit';

import tickerSlice from './ticker-slice';

const store = configureStore({
  reducer: tickerSlice.reducer,
});

export default store;

import { tickerActions } from './ticker-slice';

export const getTickerData = socket => {
  return dispatch => {
    socket.on('ticker', data => {
      dispatch(tickerActions.updateTicker(data));
    });
  };
};

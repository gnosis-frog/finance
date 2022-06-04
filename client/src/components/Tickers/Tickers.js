import styles from './Tickers.module.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TickerList from './TickersList';
import {
  setSocketInterval,
  socketConnect,
  socketDisconnect,
} from '../../socket-api';
import { getTickerData } from '../../store/ticker-actions';

let isInitial = true;

const Ticker = () => {
  const tickers = useSelector(state => state.tickers);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (isInitial) {
      const socket = socketConnect();
      dispatch(getTickerData(socket));
      isInitial = false;
      return;
    }
  }, [tickers, dispatch]);

  const handleSocketConnect = () => {
    const socket = socketConnect();
    dispatch(getTickerData(socket));
    setDisabled(false);
  };

  const handleSocketDisconnect = () => {
    socketDisconnect();
    setDisabled(true);
  };

  const handleIntervalChange = e => {
    const interval = e.target.value;
    const socket = setSocketInterval(interval);
    dispatch(getTickerData(socket));
  };

  return (
    <div className={styles.tickerTable}>
      <button className={styles.btnStart} onClick={handleSocketConnect}>
        Слідкувати
      </button>
      <button className={styles.btnStop} onClick={handleSocketDisconnect}>
        Зупинити слідкування
      </button>
      <label>1сек</label>
      <input
        type='range'
        min='1000'
        max='10000'
        step='1000'
        disabled={disabled}
        onChange={handleIntervalChange}
      ></input>
      <label>10сек</label>
      <TickerList tickers={tickers} />
    </div>
  );
};

export default Ticker;

import styles from './Tickers.module.scss';

const TickersList = ({ tickers }) => {
  return (
    <div>
      {tickers.map((ticker, index) => {
        let date = new Date(ticker.last_trade_time);
        return (
          <div key={index} className={styles.tickerRow}>
            <p>{ticker.ticker}</p>
            <p>{ticker.exchange}</p>
            <p
              style={{
                backgroundColor: ticker.changePositive
                  ? 'rgb(86, 212, 28)'
                  : 'red',
              }}
            >
              {ticker.price}
            </p>
            <p>{ticker.change}%</p>
            <p>{ticker.change_percent}%</p>
            <p>{ticker.dividend}</p>
            <p>{ticker.yield}</p>
            <p>
              {(date.getHours() < 10 ? '0' : '') +
                date.getHours() +
                ':' +
                (date.getMinutes() < 10 ? '0' : '') +
                date.getMinutes() +
                ':' +
                (date.getSeconds() < 10 ? '0' : '') +
                date.getSeconds()}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TickersList;

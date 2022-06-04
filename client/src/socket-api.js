import io from 'socket.io-client';

let socket;

export const socketConnect = () => {
  socket = io('http://localhost:4000');
  socket.emit('start', 5000);
  return socket;
};

export const socketDisconnect = () => {
  socket.disconnect();
};

export const setSocketInterval = interval => {
  socket.disconnect();
  socket = io('http://localhost:4000');
  socket.emit('start', interval);
  return socket;
};

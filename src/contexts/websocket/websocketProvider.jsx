import { io } from 'socket.io-client';
import { WebsocketContext } from './websocketContext';
import { useMemo } from 'react';

const SERVER_URL = 'https://websocket.fer.software/';

export const WebsocketProvider = ({ children }) => {

  const token = localStorage.getItem('token');

  let ioInstance = io(`${SERVER_URL}?token=${token}`);

  const addToken = (newToken) => {
    ioInstance.close();
    ioInstance = io(`${SERVER_URL}?token=${newToken}`);

    websocket.connect();
  };

  const websocket = useMemo(() => {
    return ioInstance;
  }, [ioInstance]);

  return (
    <WebsocketContext.Provider value={{ websocket, addToken }}>
      {children}
    </WebsocketContext.Provider>
  );
};

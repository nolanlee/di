import io from 'socket.io-client';

const socket = io('/', {
  path: '/chatroom',
});

export default socket;

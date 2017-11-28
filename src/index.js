const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback());
const router = require('koa-router')();
const staticServe = require('koa-static');
const io = require('socket.io')(server, {
  path: '/chatroom'
});

const STATIC_PATH = `${__dirname}/../ui/dist`;

app.use(async (ctx, next) => {
  await next();
  const { method, url } = ctx.request;
  console.log(method, url);
});

app.use(staticServe(STATIC_PATH));

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on http://127.0.0.1:3000');
});
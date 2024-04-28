const express = require('express')
const app = express()
const port = 3001

const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routers/message');
const router1 = require('./routers/conversations');

const { createServer } = require('node:http');
const server = createServer(app)


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/chatapp', {}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api/message', router)
app.use('/api/conversation', router1)

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('chat message', msg);
  });
});




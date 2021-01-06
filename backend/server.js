const express = require('express');
const app = express();
const connectDB = require('./config/db');
const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const normalizePort = (val) => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  debug('Listening on ' + bind);
};


const port = normalizePort(process.env.PORT || '5000');

app.use('/', indexRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.on('error', onError);
app.on('listening', onListening);
app.listen(port);

console.log(`Server running on port ${port}`);
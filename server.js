const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// bring routes
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag');
const formRoutes = require('./routes/form');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('DB connected'))
    .catch((err) => {
      console.log(err);
    });

  const server = express();

  // middlewares
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(cookieParser());
  // cors
  if (process.env.NODE_ENV === 'development') {
    server.use(cors({ origin: `${process.env.CLIENT_URL}` }));
  }

  // routes middleware
  server.use('/api', blogRoutes);
  server.use('/api', authRoutes);
  server.use('/api', userRoutes);
  server.use('/api', categoryRoutes);
  server.use('/api', tagRoutes);
  server.use('/api', formRoutes);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Serving on localhost:3000');
  });
});

import express from 'express';
import { nextTick } from 'process';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('Boom');
  next();
});

userRouter.post('/login', (req, res) => {
  res.send('login');
});

userRouter.post('/register', (req, res) => {
  res.send('register');
});

export { userRouter };

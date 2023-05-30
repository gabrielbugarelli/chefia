import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3333, () => {
      console.log('Backend started! 🚀');
    });

    app.use(router);
  })
  .catch(error => console.log('connection error of mongodb', error));

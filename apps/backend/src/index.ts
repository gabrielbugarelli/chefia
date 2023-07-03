import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3333, () => {
      console.log('=> Backend started on port 🚀: http://localhost:3333/');
    });

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);
  })
  .catch(error => console.log('connection error of mongodb', error));

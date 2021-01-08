import express from 'express';
import routes from './routes';
import cors from 'cors';
import mongoose from 'mongoose';
import { url, flags } from './config/database';

class App {
  constructor() {
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }
  database() {
    mongoose.connect(url, flags);
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

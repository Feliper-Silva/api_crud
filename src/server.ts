import express from 'express';
import pg from 'pg';
import { router } from './routes/modulesRouter';
require('dotenv').config();

export const client = new pg.Client({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  port: '5432'
});

client.connect();

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('Server iniciado port: 3000'));

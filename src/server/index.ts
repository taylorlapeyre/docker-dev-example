import { Client } from 'pg';
import express from 'express';
import path from 'path';

async function boot() {
  const db = new Client(process.env.DATABASE_URL);
  const app = express();

  await db.connect();

  app.use(express.static(path.join(__dirname, '..', 'client')));

  app.get('/api/ping', (req, res) => {
    res.send({ message: 'pong' });
  })

  app.listen(8080);
}

boot();

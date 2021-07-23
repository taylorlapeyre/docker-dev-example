import { Client } from 'pg';
import express from 'express';

async function boot() {
  const db = new Client(process.env.DATABASE_URL);
  const app = express();

  await db.connect();

  app.get('/*', (req, res) => {
    res.send("Hello World");
  })

  app.listen(8080);
}

boot();

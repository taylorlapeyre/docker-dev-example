import { Client } from 'pg';
import express from 'express';
import path from 'path';

async function boot() {
  const db = new Client(process.env.DATABASE_URL);
  const app = express();

  await db.connect();

  app.use(express.static(path.join(__dirname, '..', 'client')));

  app.get('/api/users', async (req, res) => {
    const { rows: users } = await db.query(`SELECT * FROM users`);
    res.send({ users });
  })

  app.listen(8080);
}

boot();

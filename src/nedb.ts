import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 8000;

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${port}`);
});
import express, { Request, Response } from 'express';
import db from './config/database.config';

db.sync().then(() => {
  console.log('connected to database');
});

//console.log('Hello Yann');
const app = express();
const port = 9000;

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server start on port: ' + port);
});

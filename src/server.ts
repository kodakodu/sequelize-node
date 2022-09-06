import express, { Request, Response } from 'express';

//console.log('Hello Yann');
const app = express();
const port = 9000;

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server start on port: ' + port);
});

import express, { NextFunction, Request, Response } from 'express';
import db from './config/database.config';
import { v4 as uuidv4 } from 'uuid';
import { TodoInstance } from './model';
import TodoValidator from './validator';
import { validationResult } from 'express-validator';

db.sync().then(() => {
  console.log('connected to database');
});

//console.log('Hello Yann');
const app = express();
const port = 9000;

app.use(express.json());

/* app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World');
}); */
app.post(
  '/create',
  TodoValidator.checkCreateTodo(),
  (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json(error);
    }
    next();
  },
  async (req: Request, res: Response) => {
    const id = uuidv4();
    try {
      const record = await TodoInstance.create({ ...req.body, id });
      return res.json({ record, msg: 'Successfully create Todo' });
    } catch (e) {
      return res.json({ msg: 'fail to create', status: 500, route: '/create' });
    }
  }
);

app.get('/', (req: Request, res: Response) => {
  res.send('OK Tutti !');
});

app.listen(port, () => {
  console.log('Server start on port: ' + port);
});

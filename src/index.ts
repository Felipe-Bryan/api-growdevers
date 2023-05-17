import express, { Request, Response } from 'express';
import { Growdever } from './models/growdever';

const app = express();
app.get('/', (req: Request, res: Response) => {
  console.log('entrou na rota');
  const growdever1 = new Growdever('GD1', 'Felipe', 32);
  res.status(200).send({ ok: true, data: growdever1.toJson() });
});

app.listen(3333, () => {
  console.log('Server running');
});

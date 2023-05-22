import express, { Request, Response } from 'express';
import { growdevers } from './database/growdevers';
import { GrowdeverController } from './controllers/growdever.controller';

const app = express();
app.use(express.json());

// Rotas de growdever -> /growdever

// Listar growdevers
// GET http://localhost:3333/growdever

app.get('/growdever', (req: Request, res: Response) => {
  try {
    const { idade } = req.query;

    let result = growdevers;

    if (idade) {
      result = growdevers.filter((growdever) => growdever.idade === Number(idade));
    }

    return res.status(200).send({
      ok: true,
      msg: 'Growdevers were sucessfully listed',
      data: result.map((growdever) => growdever.toJson()),
    });
  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      msg: error.toString(),
    });
  }
});

// Obter growdever por ID
// GET http://localhost:3333/growdever/:id
app.get('/growdever/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = growdevers.find((growdever) => growdever.id === id);

    if (!result) {
      return res.status(404).send({
        ok: false,
        msg: 'Growdever not found',
      });
    }

    return res.status(200).send({
      ok: true,
      msg: 'Growdever was sucessfully obtained',
      data: result.toJson(),
    });
  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      msg: error.toString(),
    });
  }
});

// Criar um growdever
// POST http:// http://localhost:3333
app.post('/growdever', (req: Request, res: Response) => new GrowdeverController().create(req, res));

app.listen(3333, () => {
  console.log('Server running');
});

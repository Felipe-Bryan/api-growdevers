import { growdevers } from '../database/growdevers';
import { Growdever } from '../models/growdever';
import express, { Request, Response } from 'express';

export class GrowdeverController {
  public create(req: Request, res: Response) {
    try {
      const { nome, idade } = req.body;

      if (!nome) {
        return res.status(400).send({
          ok: false,
          msg: 'Nome is required',
        });
      }

      if (!idade) {
        return res.status(400).send({
          ok: false,
          msg: 'Idade is required',
        });
      }

      const newGrowdever = new Growdever(nome, idade);

      growdevers.push(newGrowdever);

      return res.status(201).send({
        ok: true,
        msg: 'Growdever was sucessfully created',
        data: newGrowdever.toJson(),
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        msg: error.toString(),
      });
    }
  }
}

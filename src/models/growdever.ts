import { v4 as creatUuid } from 'uuid';

export class Growdever {
  private _id: string;

  constructor(private _nome: string, private _idade: number) {
    this._id = creatUuid();
  }

  public get id() {
    return this._id;
  }

  public get nome() {
    return this._nome;
  }
  public get idade() {
    return this._idade;
  }

  public toJson() {
    return {
      id: this._id,
      nome: this._nome,
      idade: this._idade,
    };
  }
}

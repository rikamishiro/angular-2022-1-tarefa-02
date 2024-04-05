import { ILivro } from "./livro.interface";

export interface IGeneroLiterario {
  _id: string;
  genero: string;
  livros: ILivro[];
}

export interface ILivro extends IGeneroLiterario {
  genero_codigo: string;
}

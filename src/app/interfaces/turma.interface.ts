import { IAluno } from "./aluno.interface";

export interface ITurmaBase {
  _id: string;
  ano: number;
  periodo: number;
}

export interface ITurma extends ITurmaBase {
  disciplina_codigo: string;
}

export interface ITurmaDetalhes extends ITurmaBase {
  disciplina: {
    _id: string;
    codigo: string;
    nome: string;
  };
  alunos: IAluno[];
}

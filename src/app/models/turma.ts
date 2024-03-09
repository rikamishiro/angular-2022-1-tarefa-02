import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export abstract class TurmaBase {

  constructor(
    public ano: number,
    public periodo: number,
  ) {
  }

  public abstract nome: string;

}

export class Turma extends TurmaBase {

  constructor(
    public _id: string,
    public disciplinaCodigo: string,
    public override ano: number,
    public override periodo: number,
  ) {
    super(
      ano,
      periodo,
    );
  }

  public get nome() {
    return `${this.disciplinaCodigo}-${this.ano}/${this.periodo}`;
  }

}

export class TurmaDetalhes extends TurmaBase {

  constructor(
    public disciplina: Disciplina,
    public override ano: number,
    public override periodo: number,
    public alunos: Aluno[],
  ) {
    super(
      ano,
      periodo,
    );
  }

  public get nome() {
    return `${this.disciplina.codigo}-${this.ano}/${this.periodo}`;
  }

}

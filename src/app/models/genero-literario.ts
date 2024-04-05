import { Livro } from "./livros";

export abstract class GeneroLiterarioBase {

  constructor(
    public genero: string,
  ) {
  }

  public abstract generoliterario: string;

}

export class Livro extends LivroBase {

  constructor(
    public _id: string,
    public genero: string,
    public override nome: string,
    public override autor: string,
    public override ano: number,
  ) {
    super(
      nome,
      autor,
      ano,
    );
  }

  public get generoliterario() {
    return `${this.genero}`;
  }

}

export class GeneroLiterario extends GeneroLiterarioBase {

  constructor(
    public generoliterario: Genero,
    public override nome: string,
    public override autor: string,
    public override ano: number,
    public livros: Livro[],
  ) {
    super(
      nome,
      autor,
      ano,
    );
  }

  public get generoliterario() {
    return `${this.genero} - ${this.nome}`;
  }

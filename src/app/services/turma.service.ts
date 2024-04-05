import { Injectable, inject } from '@angular/core';

import { ReplaySubject, map } from 'rxjs';

import { API_BASE } from '../app.config';
import { Turma, TurmaDetalhes } from '../models/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno } from '../models/aluno';
import { ITurma, ITurmaDetalhes } from '../interfaces/turma.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  private _turmas$ = new ReplaySubject<Turma[]>(1);
  public turmas$ = this._turmas$.asObservable();

  private _turmaSelecionada$ = new ReplaySubject<TurmaDetalhes>(1);
  public turmaSelecionada$ = this._turmaSelecionada$.asObservable();

  public httpClient = inject(HttpClient);
  public apiBase = inject(API_BASE);

  constructor() {
    this.httpClient.get<ITurma[]>(
      `${this.apiBase}/turmas`,
    ).pipe(
      map(ts => ts.map(t => new Turma(
        t._id,
        t.disciplina_codigo,
        t.ano,
        t.periodo,
      ))),
    ).subscribe(this._turmas$);
  }

  public selecionaTurma(t: Turma) {
    this.httpClient.get<ITurmaDetalhes>(
      `${this.apiBase}/turmas/${t._id}`,
    ).pipe(
      map(t => new TurmaDetalhes(
        new Disciplina(
          t.disciplina.codigo,
          t.disciplina.nome,
        ),
        t.ano,
        t.periodo,
        t.alunos.map(a => new Aluno(
          a.codigo,
          a.nome,
        )),
      )),
    ).subscribe(turmaDetalhes => this._turmaSelecionada$.next(turmaDetalhes));
  }

}

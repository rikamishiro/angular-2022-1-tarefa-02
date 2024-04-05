import {
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaDetalhes } from '../../models/turma';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css',
})
export class TurmaComponent {

  @Input({
    required: true,
  })
  public turma!: TurmaDetalhes;

}

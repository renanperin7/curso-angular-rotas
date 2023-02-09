import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: "Renan", email: "renan@email.com"},
    {id: 2, nome: "Joao", email: "joao@email.com"},
    {id: 3, nome: "Maria", email: "maria@email.com"}
  ]

  getAlunos() {
    return this.alunos
  }

  getAluno(id: number) {
    for(let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i]
      if(aluno.id == id){
        return aluno
      }
    }
    return null
  }

  constructor() { }
}

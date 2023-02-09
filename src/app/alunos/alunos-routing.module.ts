import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guard/alunos-guard';
import { AlunosDeactivateGuard } from '../guard/alunos-deactivate-guard';
import { AlunoDetalheResolver } from './guard-alunos/aluno-detalhe.resolver';

const alunoRoutes = [
  { path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
    { path: 'novo', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
    { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(alunoRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {

}

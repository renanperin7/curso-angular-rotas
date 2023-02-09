import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { FormCandeactivate } from './form-candeactivate';

@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<FormCandeactivate> {
  canDeactivate(
    component: FormCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('guarda de desativação')

    // return component.podeMudarRota();

    return component.podeDesativar();
  }
}

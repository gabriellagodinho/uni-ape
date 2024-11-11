import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudaAtendimentoPage } from './ajuda-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: AjudaAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaAtendimentoPageRoutingModule {}

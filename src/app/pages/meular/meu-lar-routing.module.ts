import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuLarPage } from './meu-lar.page';

const routes: Routes = [
  {
    path: '',
    component: MeuLarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuLarPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImoveisAnunciadosPage } from './imoveis-anunciados.page';

const routes: Routes = [
  {
    path: '',
    component: ImoveisAnunciadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImoveisAnunciadosPageRoutingModule {}

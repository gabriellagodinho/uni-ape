import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepassesPage } from './repasses.page';

const routes: Routes = [
  {
    path: '',
    component: RepassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepassesPageRoutingModule {}

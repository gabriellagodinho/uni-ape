import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatCorretoresPage } from './chat-corretores.page';

const routes: Routes = [
  {
    path: '',
    component: ChatCorretoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatCorretoresPageRoutingModule {}

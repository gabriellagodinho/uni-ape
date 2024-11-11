import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatProprietarioPage } from './chat-proprietario.page';

const routes: Routes = [
  {
    path: '',
    component: ChatProprietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatProprietarioPageRoutingModule {}

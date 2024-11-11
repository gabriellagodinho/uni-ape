import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatInquilinoPage } from './chat-inquilino.page';

const routes: Routes = [
  {
    path: '',
    component: ChatInquilinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatInquilinoPageRoutingModule {}

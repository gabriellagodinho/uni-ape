import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatCorretoresPageRoutingModule } from './chat-corretores-routing.module';

import { ChatCorretoresPage } from './chat-corretores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatCorretoresPageRoutingModule
  ],
  declarations: [ChatCorretoresPage]
})
export class ChatCorretoresPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatProprietarioPageRoutingModule } from './chat-proprietario-routing.module';

import { ChatProprietarioPage } from './chat-proprietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatProprietarioPageRoutingModule
  ],
  declarations: [ChatProprietarioPage]
})
export class ChatProprietarioPageModule {}

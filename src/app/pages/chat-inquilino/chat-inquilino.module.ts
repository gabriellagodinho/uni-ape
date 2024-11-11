import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatInquilinoPageRoutingModule } from './chat-inquilino-routing.module';

import { ChatInquilinoPage } from './chat-inquilino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatInquilinoPageRoutingModule
  ],
  declarations: [ChatInquilinoPage]
})
export class ChatInquilinoPageModule {}

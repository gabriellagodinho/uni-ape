import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudaAtendimentoPageRoutingModule } from './ajuda-atendimento-routing.module';

import { AjudaAtendimentoPage } from './ajuda-atendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudaAtendimentoPageRoutingModule
  ],
  declarations: [AjudaAtendimentoPage]
})
export class AjudaAtendimentoPageModule {}

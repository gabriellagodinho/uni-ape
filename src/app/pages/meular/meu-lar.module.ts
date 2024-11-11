import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MeuLarPageRoutingModule } from './meu-lar-routing.module';
import { MeuLarPage } from './meu-lar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuLarPageRoutingModule
  ],
  declarations: [MeuLarPage]
})
export class MeuLarPageModule {}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImoveisAnunciadosPageRoutingModule } from './imoveis-anunciados-routing.module';

import { ImoveisAnunciadosPage } from './imoveis-anunciados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImoveisAnunciadosPageRoutingModule
  ],
  declarations: [ImoveisAnunciadosPage]
})
export class ImoveisAnunciadosPageModule {}

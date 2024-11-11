import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImovelPage } from './imovel.page';
import { RouterModule } from '@angular/router';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Certifique-se de que o IonicModule está aqui
    RouterModule.forChild([{ path: '', component: ImovelPage }])
  ],
  declarations: [ImovelPage]
})
export class ImovelPageModule {}

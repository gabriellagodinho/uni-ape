import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepassesPageRoutingModule } from './repasses-routing.module';

import { RepassesPage } from './repasses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepassesPageRoutingModule
  ],
  declarations: [RepassesPage]
})
export class RepassesPageModule {}

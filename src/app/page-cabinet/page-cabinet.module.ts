import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCabinetPageRoutingModule } from './page-cabinet-routing.module';

import { PageCabinetPage } from './page-cabinet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCabinetPageRoutingModule
  ],
  declarations: [PageCabinetPage]
})
export class PageCabinetPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailIndustriePageRoutingModule } from './detail-industrie-routing.module';

import { DetailIndustriePage } from './detail-industrie.page';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailIndustriePageRoutingModule,
    MatToolbarModule, MatIconModule
  ],
  declarations: [DetailIndustriePage]
})
export class DetailIndustriePageModule {}
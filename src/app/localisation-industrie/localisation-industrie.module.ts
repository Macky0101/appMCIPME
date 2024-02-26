import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalisationIndustriePageRoutingModule } from './localisation-industrie-routing.module';

import { LocalisationIndustriePage } from './localisation-industrie.page';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalisationIndustriePageRoutingModule,
    MatToolbarModule, MatIconModule

  ],
  declarations: [LocalisationIndustriePage]
})
export class LocalisationIndustriePageModule {}

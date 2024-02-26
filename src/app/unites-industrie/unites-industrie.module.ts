import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitesIndustriePageRoutingModule } from './unites-industrie-routing.module';

import { UnitesIndustriePage } from './unites-industrie.page';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitesIndustriePageRoutingModule,
    MatTabsModule,
    MatDividerModule,
    MatToolbarModule, MatIconModule

  ],
  declarations: [UnitesIndustriePage]
})
export class UnitesIndustriePageModule {}

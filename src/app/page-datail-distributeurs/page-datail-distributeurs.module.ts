import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDatailDistributeursPageRoutingModule } from './page-datail-distributeurs-routing.module';

import { PageDatailDistributeursPage } from './page-datail-distributeurs.page';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDatailDistributeursPageRoutingModule,
    MatToolbarModule
  ],
  declarations: [PageDatailDistributeursPage]
})
export class PageDatailDistributeursPageModule {}

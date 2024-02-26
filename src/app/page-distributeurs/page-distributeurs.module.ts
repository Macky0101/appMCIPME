import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDistributeursPageRoutingModule } from './page-distributeurs-routing.module';

import { PageDistributeursPage } from './page-distributeurs.page';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDistributeursPageRoutingModule,
    MatToolbarModule
  ],
  declarations: [PageDistributeursPage]
})
export class PageDistributeursPageModule {}

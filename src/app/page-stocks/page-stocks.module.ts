import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageStocksPageRoutingModule } from './page-stocks-routing.module';

import { PageStocksPage } from './page-stocks.page';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LineChartDncicComponent } from '../compoments/line-chart-dncic/line-chart-dncic.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { LineChartStocksComponent } from '../compoments/line-chart-stocks/line-chart-stocks.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageStocksPageRoutingModule,
    MatToolbarModule,
    LineChartDncicComponent,
    MatTableModule, MatIconModule,


  ],
  declarations: [PageStocksPage]
})
export class PageStocksPageModule {}

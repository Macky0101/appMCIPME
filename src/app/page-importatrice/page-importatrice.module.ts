import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageImportatricePageRoutingModule } from './page-importatrice-routing.module';

import { PageImportatricePage } from './page-importatrice.page';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LineChartStocksComponent } from '../compoments/line-chart-stocks/line-chart-stocks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageImportatricePageRoutingModule,
    MatToolbarModule,
    MatTableModule, MatIconModule,
    LineChartStocksComponent
  ],
  declarations: [PageImportatricePage]
})
export class PageImportatricePageModule {}

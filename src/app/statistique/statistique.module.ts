import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiquePageRoutingModule } from './statistique-routing.module';

import { StatistiquePage } from './statistique.page';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VerticalBarChartComponent } from '../compoments/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent } from '../compoments/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiquePageRoutingModule,
    MatToolbarModule, MatIconModule,
    VerticalBarChartComponent,
    PieChartComponent,
    NgxChartsModule

  ],
  declarations: [StatistiquePage]
})
export class StatistiquePageModule {}

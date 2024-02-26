import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DNCICPageRoutingModule } from './dncic-routing.module';

import { DNCICPage } from './dncic.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LineChartComponent } from '../compoments/line-chart/line-chart.component';
import { CardChartComponent } from '../compoments/card-chart/card-chart.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DNCICPageRoutingModule,
    LineChartComponent,
    CardChartComponent
  ],
  declarations: [DNCICPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DNCICPageModule {}

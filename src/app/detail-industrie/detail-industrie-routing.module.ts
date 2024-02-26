import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailIndustriePage } from './detail-industrie.page';

const routes: Routes = [
  {
    path: '',
    component: DetailIndustriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailIndustriePageRoutingModule {}

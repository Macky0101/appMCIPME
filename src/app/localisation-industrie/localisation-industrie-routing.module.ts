import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalisationIndustriePage } from './localisation-industrie.page';

const routes: Routes = [
  {
    path: '',
    component: LocalisationIndustriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalisationIndustriePageRoutingModule {}

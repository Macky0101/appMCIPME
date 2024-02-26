import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitesIndustriePage } from './unites-industrie.page';

const routes: Routes = [
  {
    path: '',
    component: UnitesIndustriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitesIndustriePageRoutingModule {}

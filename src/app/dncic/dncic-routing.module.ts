import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DNCICPage } from './dncic.page';

const routes: Routes = [
  {
    path: '',
    component: DNCICPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DNCICPageRoutingModule {}

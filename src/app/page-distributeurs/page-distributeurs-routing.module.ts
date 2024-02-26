import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDistributeursPage } from './page-distributeurs.page';

const routes: Routes = [
  {
    path: '',
    component: PageDistributeursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDistributeursPageRoutingModule {}

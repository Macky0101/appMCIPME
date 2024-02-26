import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDatailDistributeursPage } from './page-datail-distributeurs.page';

const routes: Routes = [
  {
    path: '',
    component: PageDatailDistributeursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDatailDistributeursPageRoutingModule {}

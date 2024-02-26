import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageImportatricePage } from './page-importatrice.page';

const routes: Routes = [
  {
    path: '',
    component: PageImportatricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageImportatricePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageStocksPage } from './page-stocks.page';

const routes: Routes = [
  {
    path: '',
    component: PageStocksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageStocksPageRoutingModule {}

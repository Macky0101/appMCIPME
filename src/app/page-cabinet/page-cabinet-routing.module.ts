import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCabinetPage } from './page-cabinet.page';

const routes: Routes = [
  {
    path: '',
    component: PageCabinetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCabinetPageRoutingModule {}

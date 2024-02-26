import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'page-cabinet',
    pathMatch: 'full'
  },
  {
    path: 'unites-industrie',
    loadChildren: () => import('./unites-industrie/unites-industrie.module').then( m => m.UnitesIndustriePageModule)
  },
  {
    path: 'detail-industrie',
    loadChildren: () => import('./detail-industrie/detail-industrie.module').then( m => m.DetailIndustriePageModule)
  },
  {
    path: 'localisation-industrie',
    loadChildren: () => import('./localisation-industrie/localisation-industrie.module').then( m => m.LocalisationIndustriePageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'dncic',
    loadChildren: () => import('./dncic/dncic.module').then( m => m.DNCICPageModule)
  },
  {
    path: 'page-stocks',
    loadChildren: () => import('./page-stocks/page-stocks.module').then( m => m.PageStocksPageModule)
  },
  {
    path: 'page-importatrice',
    loadChildren: () => import('./page-importatrice/page-importatrice.module').then( m => m.PageImportatricePageModule)
  },
  {
    path: 'page-distributeurs',
    loadChildren: () => import('./page-distributeurs/page-distributeurs.module').then( m => m.PageDistributeursPageModule)
  },
  {
    path: 'page-datail-distributeurs',
    loadChildren: () => import('./page-datail-distributeurs/page-datail-distributeurs.module').then( m => m.PageDatailDistributeursPageModule)
  },
  {
    path: 'page-cabinet',
    loadChildren: () => import('./page-cabinet/page-cabinet.module').then( m => m.PageCabinetPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }

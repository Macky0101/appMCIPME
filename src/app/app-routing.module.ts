import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'page-login',
    pathMatch: 'full'
  },
  {
    path: 'unites-industrie',
    canActivate:[AuthGuard],
    loadChildren: () => import('./unites-industrie/unites-industrie.module').then( m => m.UnitesIndustriePageModule)
  },
  {
    path: 'detail-industrie/:CodeMpme',
    canActivate:[AuthGuard],
    loadChildren: () => import('./detail-industrie/detail-industrie.module').then( m => m.DetailIndustriePageModule)
  },
  {
    path: 'localisation-industrie',
    canActivate:[AuthGuard],
    loadChildren: () => import('./localisation-industrie/localisation-industrie.module').then( m => m.LocalisationIndustriePageModule)
  },
  {
    path: 'statistique',
    canActivate:[AuthGuard],
    loadChildren: () => import('./statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'dncic',
    canActivate:[AuthGuard],
    loadChildren: () => import('./dncic/dncic.module').then( m => m.DNCICPageModule)
  },
  {
    path: 'page-stocks',
    canActivate:[AuthGuard],
    loadChildren: () => import('./page-stocks/page-stocks.module').then( m => m.PageStocksPageModule)
  },
  {
    path: 'page-importatrice',
    canActivate:[AuthGuard],
    loadChildren: () => import('./page-importatrice/page-importatrice.module').then( m => m.PageImportatricePageModule)
  },
  {
    path: 'page-distributeurs',
    canActivate:[AuthGuard],
    loadChildren: () => import('./page-distributeurs/page-distributeurs.module').then( m => m.PageDistributeursPageModule)
  },
  {
    path: 'page-datail-distributeurs',
    canActivate:[AuthGuard],
    loadChildren: () => import('./page-datail-distributeurs/page-datail-distributeurs.module').then( m => m.PageDatailDistributeursPageModule)
  },
  {
    path: 'page-cabinet',
    canActivate:[AuthGuard],
    loadChildren: () => import('./page-cabinet/page-cabinet.module').then( m => m.PageCabinetPageModule)
  },
  {
    path: 'page-login',
    loadChildren: () => import('./page-login/page-login.module').then( m => m.PageLoginPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }

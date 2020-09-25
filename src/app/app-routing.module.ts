import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cocteles',
    loadChildren: () => import('./cocteles/cocteles.module').then( m => m.CoctelesPageModule)
  },
  {
    path: 'cervezas',
    loadChildren: () => import('./cervezas/cervezas.module').then( m => m.CervezasPageModule)
  },
  {
    path: 'vinos',
    loadChildren: () => import('./vinos/vinos.module').then( m => m.VinosPageModule)
  },
  {
    path: 'chupitos',
    loadChildren: () => import('./chupitos/chupitos.module').then( m => m.ChupitosPageModule)
  },
  {
    path: 'mocktails',
    loadChildren: () => import('./mocktails/mocktails.module').then( m => m.MocktailsPageModule)
  },
  {
    path: 'gazeosas',
    loadChildren: () => import('./gazeosas/gazeosas.module').then( m => m.GazeosasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

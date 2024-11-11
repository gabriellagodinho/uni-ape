import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'recomendados',
    loadChildren: () => import('./recomendados/recomendados.module').then( m => m.RecomendadosPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./visitas/visitas.module').then( m => m.VisitasPageModule)
  },
  {
    path: 'propostas',
    loadChildren: () => import('./propostas/propostas.module').then( m => m.PropostasPageModule)
  },
  {
    path: 'imoveis-anunciados',
    loadChildren: () => import('./imoveis-anunciados/imoveis-anunciados.module').then( m => m.ImoveisAnunciadosPageModule)
  },
  {
    path: 'contratos',
    loadChildren: () => import('./contratos/contratos.module').then( m => m.ContratosPageModule)
  },
  {
    path: 'repasses',
    loadChildren: () => import('./repasses/repasses.module').then( m => m.RepassesPageModule)
  },
  {
    path: 'anunciar',
    loadChildren: () => import('./anunciar/anunciar.module').then( m => m.AnunciarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}

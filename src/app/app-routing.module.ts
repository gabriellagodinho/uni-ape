import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'folder/recomendados',
    loadChildren: () => import('./folder/recomendados/recomendados.module').then(m => m.RecomendadosPageModule)
  },
  {
    path: 'folder/favoritos',
    loadChildren: () => import('./folder/favoritos/favoritos.module').then(m => m.FavoritosPageModule)
  },
  {
    path: 'folder/alertas',
    loadChildren: () => import('./folder/alertas/alertas.module').then(m => m.AlertasPageModule)
  },
  {
    path: 'folder/visitas',
    loadChildren: () => import('./folder/visitas/visitas.module').then(m => m.VisitasPageModule)
  },
  {
    path: 'folder/propostas',
    loadChildren: () => import('./folder/propostas/propostas.module').then(m => m.PropostasPageModule)
  },
  {
    path: 'folder/imoveis-anunciados',
    loadChildren: () => import('./folder/imoveis-anunciados/imoveis-anunciados.module').then(m => m.ImoveisAnunciadosPageModule)
  },
  {
    path: 'folder/contratos',
    loadChildren: () => import('./folder/contratos/contratos.module').then(m => m.ContratosPageModule)
  },
  {
    path: 'folder/repasses',
    loadChildren: () => import('./folder/repasses/repasses.module').then(m => m.RepassesPageModule)
  },
  {
    path: 'folder/anunciar',
    loadChildren: () => import('./folder/anunciar/anunciar.module').then(m => m.AnunciarPageModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then(m => m.BuscaPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'chat-corretores',
    loadChildren: () => import('./pages/chat-corretores/chat-corretores.module').then(m => m.ChatCorretoresPageModule)
  },
  {
    path: 'chat-inquilino',
    loadChildren: () => import('./pages/chat-inquilino/chat-inquilino.module').then(m => m.ChatInquilinoPageModule)
  },
  {
    path: 'chat-proprietario',
    loadChildren: () => import('./pages/chat-proprietario/chat-proprietario.module').then(m => m.ChatProprietarioPageModule)
  },
  {
    path: 'ajuda-atendimento',
    loadChildren: () => import('./pages/ajuda-atendimento/ajuda-atendimento.module').then(m => m.AjudaAtendimentoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'imovel',
    loadChildren: () => import('./imovel/imovel.module').then(m => m.ImovelPageModule)
  },
  {
    path: 'meular',
    loadChildren: () => import('./pages/meular/meu-lar.module').then(m => m.MeuLarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

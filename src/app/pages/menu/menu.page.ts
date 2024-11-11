import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  public isLoggedIn: boolean = false; // Estado para verificar se o usuário está logado

  public appPages = {
    "Para quem está procurando": [
      { title: 'Recomendados', url: '/folder/recomendados', icon: 'thumbs-up' },
      { title: 'Favoritos', url: '/folder/favoritos', icon: 'heart' },
      { title: 'Alertas criados', url: '/folder/alertas', icon: 'notifications' },
      { title: 'Visitas agendadas', url: '/folder/visitas', icon: 'calendar' },
      { title: 'Propostas enviadas', url: '/folder/propostas', icon: 'cash' }
    ],
    "Para proprietários": [
      { title: 'Imóveis anunciados', url: '/folder/imoveis-anunciados', icon: 'home' },
      { title: 'Contratos', url: '/folder/contratos', icon: 'document' }
    ],
    "Ganhe dinheiro": [
      { title: 'Repasses', url: '/folder/repasses', icon: 'cash-outline' },
      { title: 'Anunciar imóvel', url: '/folder/anunciar', icon: 'business' }
    ]
  };

  constructor() {}

  // Simulação de login
  public login() {
    this.isLoggedIn = true;
  }
}

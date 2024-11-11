import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Recomendados', url: '/folder/recomendados', icon: 'thumbs-up' },
    { title: 'Favoritos', url: '/folder/favoritos', icon: 'heart' },
    { title: 'Alertas criados', url: '/folder/alertas', icon: 'notifications' },
    { title: 'Visitas agendadas', url: '/folder/visitas', icon: 'calendar' },
    { title: 'Propostas enviadas', url: '/folder/propostas', icon: 'cash' },
    { title: 'Imóveis anunciados', url: '/folder/imoveis-anunciados', icon: 'home' },
    { title: 'Contratos', url: '/folder/contratos', icon: 'document' },
    { title: 'Repasses', url: '/folder/repasses', icon: 'cash-outline' },
    { title: 'Anunciar imóvel', url: '/folder/anunciar', icon: 'business' },
  ];

  public labels = ['Para quem está procurando', 'Para proprietários', 'Ganhe dinheiro'];
  
  constructor() {}
}

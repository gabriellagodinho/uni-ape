import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' é usado para retornar dados simulados

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor() { }

  getImoveis(): Observable<any[]> {
    // Simulação de dados de imóveis. Você pode substituir isso por uma chamada HTTP real.
    const imoveis = [
      { id: 1, latitude: -23.55, longitude: -46.63, title: 'Imóvel 1' },
      { id: 2, latitude: -23.56, longitude: -46.62, title: 'Imóvel 2' },
      { id: 3, latitude: -23.57, longitude: -46.61, title: 'Imóvel 3' }
    ];
    return of(imoveis); // Retorna um Observable que emite os dados de imóveis
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interface para definir a estrutura do imóvel
interface Imovel {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  images: string[];
}

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.page.html',
  styleUrls: ['./imovel.page.scss'],
})
export class ImovelPage implements OnInit {
  imovelId!: string;
  imovel!: Imovel; // Usando a interface Imovel

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Pegue o ID do imóvel da URL com verificação de null
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.imovelId = id;
      this.fetchImovelDetails(); // Busca detalhes do imóvel baseado no ID
    } else {
      console.error('ID do imóvel não encontrado na URL.');
      // Opcional: Redirecionar ou exibir uma mensagem de erro
    }
  }

  fetchImovelDetails() {
    // Substitua esta parte com a chamada à API para buscar os detalhes do imóvel
    // Exemplo de imóvel estático:
    this.imovel = {
      id: this.imovelId,
      title: 'Imóvel Exemplo',
      description: 'Descrição detalhada do imóvel.',
      price: 1200,
      address: 'Rua Exemplo, 123',
      images: ['assets/image1.jpg', 'assets/image2.jpg'],
    };
  }
}

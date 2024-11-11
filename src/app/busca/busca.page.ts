import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service'; // Importe o serviço de localização
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {
  cityQuery: string = ''; // Para armazenar a cidade consultada
  properties: any[] = []; // Para armazenar a lista de imóveis
  filteredImoveis: any[] = []; // Para armazenar os imóveis filtrados
  searchMade: boolean = false; // Para verificar se a pesquisa foi feita
  states: any[] = []; // Para armazenar os estados
  selectedState: string = ''; // Para armazenar o estado selecionado
  cities: any[] = []; // Para armazenar as cidades do estado selecionado

  constructor(
    private locationService: LocationService,
    private geolocation: Geolocation,
  ) {}

  ngOnInit() {
    this.loadStates(); // Carregar estados ao inicializar
  }

  loadStates() {
    this.locationService.getStates().subscribe(
      data => {
        this.states = data; // Armazenar os estados recebidos
        console.log('Estados carregados:', this.states);
      },
      error => {
        console.error('Erro ao carregar estados', error); // Tratamento de erro
      }
    );
  }

  onStateChange(state: string) {
    this.selectedState = state; // Atualizar o estado selecionado
    this.loadCities(state); // Carregar cidades baseadas no estado selecionado
  }

  loadCities(state: string) {
    this.locationService.getCities(state).subscribe(
      data => {
        this.cities = data; // Armazenar as cidades recebidas
        console.log('Cidades carregadas:', this.cities);
      },
      error => {
        console.error('Erro ao carregar cidades', error); // Tratamento de erro
      }
    );
  }

  searchProperties() {
    this.searchMade = true; // Indica que a pesquisa foi realizada
    this.filteredImoveis = this.fetchProperties(this.cityQuery); // Filtra os imóveis pela cidade consultada
  }

  fetchProperties(city: string): any[] {
    const sampleProperties = [ // Exemplo de imóveis
      { title: 'Apartamento em São Paulo', address: 'Rua A, 123', price: 200000, city: 'São Paulo' },
      { title: 'Casa em São Paulo', address: 'Rua B, 456', price: 500000, city: 'São Paulo' },
      { title: 'Apartamento em Rio de Janeiro', address: 'Rua C, 789', price: 300000, city: 'Rio de Janeiro' },
    ];

    return sampleProperties.filter(property => property.city.toLowerCase() === city.toLowerCase()); // Filtrar imóveis pela cidade
  }

  filterCities() {
    if (this.cityQuery) {
      return this.cities.filter(city => 
        city.nome.toLowerCase().includes(this.cityQuery.toLowerCase()) // Filtrar cidades pela consulta
      );
    }
    return this.cities; // Retornar todas as cidades se não houver consulta
  }

  useCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const latitude = resp.coords.latitude; // Obter latitude
      const longitude = resp.coords.longitude; // Obter longitude

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      // Implementar lógica para buscar imóveis próximos aqui
      this.fetchPropertiesByLocation(latitude, longitude);
    }).catch((error) => {
      console.error('Erro ao obter localização', error); // Tratamento de erro
    });
  }

  fetchPropertiesByLocation(latitude: number, longitude: number) {
    // Lógica para buscar imóveis próximos usando latitude e longitude
    console.log('Buscar imóveis próximos...');
    // Implementar a lógica de busca aqui
  }
}



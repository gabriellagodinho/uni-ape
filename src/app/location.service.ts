import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://api.example.com'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  getStates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/estados`); // Endpoint para estados
  }

  getCities(state: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cidades/${state}`); // Endpoint para cidades
  }
}


import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from '../models/juego';
import { ApiResponse } from '../models/ApiResponse'; 
import { Observable } from 'rxjs';



/**
 * Servicio para gestionar las peticiones a la API
 * Utiliza HttpClient para realizar peticiones HTTP
 * Implementa signals para gestión reactiva del estado
 */
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // CAMBIAR: URL de TU API
  private readonly API_URL = 'https://api.rawg.io/api/games';

  // CAMBIAR: Si tu API necesita API Key
  private readonly API_KEY = 'key=tu-api-key-aqui';

  // Signal para almacenar datos
  public datos = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los elementos de la API
   * @returns Observable con la respuesta de la API
   */
  obtenerTodos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API_URL}?${this.API_KEY}`);
  }

  /**
   * Obtiene un elemento específico por ID
   * @param id - ID del elemento a buscar
   * @returns Observable con el elemento encontrado
   */
  obtenerPorId(id: string): Observable<Juego> {
    return this.http.get<Juego>(`${this.API_URL}/${id}?${this.API_KEY}`);
  }

  /**
   * Búsqueda 1: Por primer criterio
   * @param criterio - Parámetro de búsqueda
   */
  buscarPorCriterio1(criterio: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API_URL}?genres=${criterio}&${this.API_KEY}`);
  }

  /**
   * Búsqueda 2: Por segundo criterio
   * @param criterio - Parámetro de búsqueda
   */
  buscarPorCriterio2(criterio: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API_URL}?platforms=${criterio}&${this.API_KEY}`);
  }
}

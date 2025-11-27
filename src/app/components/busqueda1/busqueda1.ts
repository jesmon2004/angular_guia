import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para ngModel
import { RouterLink } from '@angular/router';
import { DatosService } from '../../services/datos';

/**
 * Componente de búsqueda 1
 * Permite filtrar elementos por un criterio específico
 * Utiliza ngModel para binding bidireccional con el input
 * Implementa FormsModule para trabajar con formularios
 */
@Component({
  selector: 'app-busqueda1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './busqueda1.html',
  styleUrl: './busqueda1.css'
})
export class Busqueda1Component {
  // Array para almacenar resultados de búsqueda
  datos: any[] = [];

  // Indicador de carga
  cargando = false;

  // 🔴 CAMBIAR: El nombre según tu criterio de búsqueda
  terminoBusqueda = '';

  // Flag para saber si ya se hizo alguna búsqueda
  busquedaRealizada = false;

  constructor(private datosService: DatosService) { }

  /**
   * Realiza la búsqueda llamando al método del servicio
   * Valida que el término no esté vacío antes de buscar
   */
  buscar(): void {
    // Trim elimina espacios al inicio y final
    if (this.terminoBusqueda.trim()) {
      this.cargando = true;
      this.busquedaRealizada = true;

      // 🔴 CAMBIAR: El método según tu servicio
      this.datosService.buscarPorCriterio1(this.terminoBusqueda).subscribe({
        next: (respuesta) => {
          // 🔴 CAMBIAR: Si tu API usa "items" o es array directo
          this.datos = respuesta.results;
          this.cargando = false;
          console.log('Resultados encontrados:', this.datos.length);
        },
        error: (error) => {
          console.error('Error en búsqueda:', error);
          this.cargando = false;
          this.datos = [];
        }
      });
    }
  }

  /**
   * Limpia los resultados de búsqueda
   */
  limpiar(): void {
    this.terminoBusqueda = '';
    this.datos = [];
    this.busquedaRealizada = false;
  }
}
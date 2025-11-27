import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DatosService } from '../../services/datos';

/**
 * Componente para mostrar la lista completa de elementos en tabla
 * Implementa OnInit para cargar datos al inicializar
 * Utiliza HttpClient a través del servicio para obtener datos de la API
 * Aplica directivas modernas de Angular 20: @if y @for
 */
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class ListaComponent implements OnInit {
  // Array para almacenar los datos recibidos de la API
  datos: any[] = [];

  // Indicador de carga para mostrar spinner
  cargando = true;

  constructor(private datosService: DatosService) { }

  /**
   * Método del ciclo de vida de Angular
   * Se ejecuta automáticamente al inicializar el componente
   */
  ngOnInit(): void {
    this.cargarDatos();
  }

  /**
   * Obtiene los datos desde la API a través del servicio
   * Utiliza el patrón Observable con subscribe
   * Maneja respuesta exitosa y errores
   */
  cargarDatos(): void {
    this.datosService.obtenerTodos().subscribe({
      // Callback cuando la petición es exitosa
      next: (respuesta) => {
        // 🔴 CAMBIAR: Si tu API usa "items" en lugar de "results"
        this.datos = respuesta.results; // O respuesta.items o respuesta directamente

        this.cargando = false;
        console.log('Datos cargados:', this.datos); // Para debug
      },
      // Callback cuando hay un error
      error: (error) => {
        console.error('Error al cargar datos:', error);
        this.cargando = false;
        // Aquí podrías mostrar un mensaje al usuario
      }
    });
  }
}
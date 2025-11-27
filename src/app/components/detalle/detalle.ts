import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatosService } from '../../services/datos';

/**
 * Componente para mostrar el detalle de un elemento específico
 * Obtiene el ID desde la URL usando ActivatedRoute
 * Este componente implementa una RUTA HIJA (lista/:id)
 * Carga datos específicos basándose en el parámetro de ruta
 */
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class DetalleComponent implements OnInit {
  // Variable para almacenar el elemento completo (singular, no array)
  dato: any = null;

  // Indicador de carga
  cargando = true;

  constructor(
    private route: ActivatedRoute,    // Para obtener parámetros de la URL
    private datosService: DatosService // Para hacer petición a la API
  ) { }

  /**
   * Al inicializar el componente, obtiene el ID de la ruta
   * y carga los detalles del elemento
   */
  ngOnInit(): void {
    // Obtiene el parámetro 'id' de la URL (ej: /lista/123)
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.cargarDetalle(id);
    } else {
      console.error('No se proporcionó un ID válido');
      this.cargando = false;
    }
  }

  /**
   * Llama al servicio para obtener los detalles del elemento por ID
   * @param id - Identificador único del elemento
   */
  cargarDetalle(id: string): void {
    this.datosService.obtenerPorId(id).subscribe({
      next: (data) => {
        this.dato = data;
        this.cargando = false;
        console.log('Detalle cargado:', this.dato);
      },
      error: (error) => {
        console.error('Error al cargar detalle:', error);
        this.cargando = false;
      }
    });
  }
}
import { Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista';
import { DetalleComponent } from './components/detalle/detalle';
import { Busqueda1Component } from './components/busqueda1/busqueda1';
import { Busqueda2Component } from './components/busqueda2/busqueda2';

/**
 * Configuración de rutas de la aplicación
 * Incluye routing con rutas hijas (lista/:id)
 */
export const routes: Routes = [
  // Ruta por defecto
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },

  // Ruta principal: lista de elementos
  {
    path: 'lista',
    component: ListaComponent
  },

  // RUTA HIJA: detalle de un elemento específico
  {
    path: 'lista/:id',
    component: DetalleComponent
  },

  // Ruta de búsqueda 1
  {
    path: 'busqueda1',
    component: Busqueda1Component
  },

  // Ruta de búsqueda 2
  {
    path: 'busqueda2',
    component: Busqueda2Component
  }
];
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

/**
 * Componente raíz de la aplicación
 * Estructura principal: Header + Contenido dinámico + Footer
 * RouterOutlet permite la navegación entre componentes
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Examen Angular 20';
}
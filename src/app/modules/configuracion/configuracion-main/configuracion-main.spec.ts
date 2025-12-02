import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracion-main',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Configuración del Sistema</h2>
      <p>Aquí se administrarán parámetros como tasas, monedas, capitalizaciones, etc.</p>
    </div>
  `,
})
export class ConfiguracionMain {}

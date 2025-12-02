import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Módulo de Reportes</h2>
      <p>Seleccione el tipo de reporte que desea visualizar.</p>
    </div>
  `,
})
export class ReportesList {}

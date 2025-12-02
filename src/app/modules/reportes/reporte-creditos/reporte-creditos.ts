import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-creditos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Reporte de Créditos</h2>
      <p>Aquí se mostrarán estadísticas y listados de créditos.</p>
    </div>
  `,
})
export class ReporteCreditos {}

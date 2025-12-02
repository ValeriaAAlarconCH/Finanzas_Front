import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-pagos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Reporte de Pagos</h2>
      <p>Aquí se mostrarán estadísticas y listados de pagos.</p>
    </div>
  `,
})
export class ReportePagos {}

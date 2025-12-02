import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagos-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Listado de Pagos</h2>
      <p>Aquí se mostrará la lista de pagos realizados por crédito.</p>
    </div>
  `,
})
export class PagosList {}

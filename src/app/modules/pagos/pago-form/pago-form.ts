import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pago-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Registrar Pago</h2>
      <p>Aquí irá el formulario para registrar un nuevo pago de un crédito.</p>
    </div>
  `,
})
export class PagoForm {}

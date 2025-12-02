import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estado-cuenta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Estado de Cuenta del Crédito</h2>
      <p>Aquí se mostrará el estado de cuenta (saldo, cuotas pagadas, pendientes, etc.).</p>
    </div>
  `,
})
export class EstadoCuenta {}

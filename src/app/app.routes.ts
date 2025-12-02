import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard';

// Clientes
import { ClientesList } from './modules/clientes/clientes-list/clientes-list';
import { ClienteDetail } from './modules/clientes/cliente-detail/cliente-detail';
import { ClienteForm } from './modules/clientes/cliente-form/cliente-form';

// Créditos
import { CreditosList } from './modules/creditos/creditos-list/creditos-list';
import { CreditoForm } from './modules/creditos/credito-form/credito-form';
import { CreditoDetail } from './modules/creditos/credito-detail/credito-detail';
import { SimuladorCredito } from './modules/creditos/simulador-credito/simulador-credito';

// Pagos
import { PagosList } from './modules/pagos/pagos-list/pagos-list';
import { PagoForm } from './modules/pagos/pago-form/pago-form';
import { EstadoCuenta } from './modules/pagos/estado-cuenta/estado-cuenta';

// Reportes
import { ReportesList } from './modules/reportes/reportes-list/reportes-list';
import { ReporteCreditos } from './modules/reportes/reporte-creditos/reporte-creditos';
import { ReportePagos } from './modules/reportes/reporte-pagos/reporte-pagos';

// Configuración
import { ConfiguracionMain } from './modules/configuracion/configuracion-main/configuracion-main';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Clientes
  { path: 'clientes', component: ClientesList },
  { path: 'clientes/nuevo', component: ClienteForm },
  { path: 'clientes/editar/:id', component: ClienteForm },
  { path: 'clientes/:id', component: ClienteDetail },

  // Créditos
  { path: 'creditos', component: CreditosList },
  { path: 'creditos/nuevo', component: CreditoForm },
  { path: 'creditos/editar/:id', component: CreditoForm },
  { path: 'creditos/:id', component: CreditoDetail },

  // Simulador
  { path: 'simulador', component: SimuladorCredito },

  // Pagos
  { path: 'pagos', component: PagosList },
  { path: 'pagos/nuevo', component: PagoForm },
  { path: 'creditos/:id/estado-cuenta', component: EstadoCuenta },

  // Reportes
  { path: 'reportes', component: ReportesList },
  { path: 'reportes/creditos', component: ReporteCreditos },
  { path: 'reportes/pagos', component: ReportePagos },

  // Configuración
  { path: 'configuracion', component: ConfiguracionMain },

  { path: '**', redirectTo: '/dashboard' },
];

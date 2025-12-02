import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import {LoadingInterceptor} from './core/interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },

    provideCharts(withDefaultRegisterables()),

    importProvidersFrom(
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgxSpinnerModule
    )
  ]
};

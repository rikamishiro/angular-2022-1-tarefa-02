import {
  ApplicationConfig,
  InjectionToken,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const API_BASE = new InjectionToken<string>('URL base do back end');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: API_BASE,
      useValue: `http://localhost:4200/api`,
    },
    importProvidersFrom(HttpClientModule),
  ],
};

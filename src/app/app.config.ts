import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, TitleStrategy, provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TitleStrategyService } from './services/title-strategy.service';
import { RouteReuseStrategyService } from './services/route-reuse-strategy.service';
import { TitleCasePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch()),
    provideAnimations(),
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReuseStrategyService,
    },
    TitleCasePipe,
  ]
};

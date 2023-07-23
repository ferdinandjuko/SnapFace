import { LOCALE_ID, enableProdMode, importProvidersFrom } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./app/core/interceptors/auth.interceptor";
import { PreloadAllModules, provideRouter, Routes, withPreloading, withRouterConfig } from "@angular/router";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import routerConfig from './app/route';
import { provideAnimations } from "@angular/platform-browser/animations";
import { httpInterceptorProviders } from './app/core/interceptors/index';// import { environment } from "./environments/environment";
import { registerLocaleData } from "@angular/common";
import localeFr from '@angular/common/locales/fr';

// if(environment.production) {}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routerConfig,
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: "reload",
      })
    ),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProviders
  ],
})
  .catch((err) => console.error(err));

  export class MainModule {
    constructor() {
      registerLocaleData(localeFr, 'fr-FR');
    }
  }


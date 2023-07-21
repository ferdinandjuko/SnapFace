import { HttpClientModule } from "@angular/common/http";
import { PreloadAllModules, provideRouter, Routes, withPreloading, withRouterConfig } from "@angular/router";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import routerConfig from './app/route';
import { provideAnimations } from "@angular/platform-browser/animations";
// import { environment } from "./environments/environment";

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
    provideAnimations()
  ],
})
  .catch((err) => console.error(err));

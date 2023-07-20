import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'
import routerConfig from './app/route';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routerConfig)
  ]
})
  .catch((err) => console.error(err));

import { provideHttpClient, withFetch } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app';


bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch())
  ]
});

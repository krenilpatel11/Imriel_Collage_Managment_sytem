import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomepageComponent } from './app/homepage/homepage.component';

bootstrapApplication(HomepageComponent, appConfig)
  .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { HomepageComponent } from './app/homepage/homepage.component';

const bootstrap = () => bootstrapApplication(HomepageComponent, config);

export default bootstrap;

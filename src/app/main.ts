import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "./polyfills";

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

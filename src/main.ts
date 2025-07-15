import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';
platformBrowser()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
   
  })
  .catch((err) => console.error(err));

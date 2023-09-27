import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

const promise = platformBrowserDynamic().bootstrapModule(AppModule);
promise.then((ngModuleRef: NgModuleRef<any>): NgModuleRef<any> => {
  // Hiding loader...
  const loader: HTMLElement = document && document.getElementById('loader-wrapper') as HTMLElement;
  if (loader && loader.parentNode) {
    loader.parentNode.removeChild(loader);
  }
  return ngModuleRef;
});

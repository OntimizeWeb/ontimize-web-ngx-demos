// src/app/app.config.ts
import { Config } from 'ontimize-web-ngx';

export const CONFIG: Config = {
  // URL base de tu backend (de momento puedes dejarla así o apuntar a tu API)
  apiEndpoint: 'http://localhost:4200/',

  uuid: 'com.ontimize.web.ngx.demos',

  title: 'My app',

  locale: 'es',

  applicationLocales: ['es']
};

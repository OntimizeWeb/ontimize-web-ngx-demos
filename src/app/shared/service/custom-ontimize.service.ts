import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { OntimizeService, LoginService, AppConfig } from 'ontimize-web-ngx';

export class CustomOntimizeService extends OntimizeService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  getDefaultServiceConfiguration(serviceName?: string): Object {

    let loginService = this.injector.get(LoginService);
    let configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    servConfig['session'] = loginService.getSessionInfo();
    return servConfig;
  }

  configureService(config: any): void {
    this._urlBase = './assets/data';
    this._sessionid = config.session ? config.session.id : -1;
    this._user = config.session ? config.session.user : '';

    if (config.entity !== undefined) {
      this.entity = config.entity;
    }
  }

  startsession(user: string, password: string): Observable<any> {
    return undefined;
  }

  endsession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  hassession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    var url = this._urlBase + '/data.json';

    var self = this;

    let innerObserver: any;
    let dataObservable = Observable.create(observer => {
      innerObserver = observer
    }).pipe(share());

    const options = {
      headers: this.buildHeaders()
    };

    this.httpClient.get(url, options).subscribe(response => {
      let resp: any = response;
      if (resp && resp.code === 3) {
        self.redirectLogin(true);
      } else if (resp.code === 1) {
        innerObserver.error(resp.message);
      } else if (resp.code === 0) {
        this.filterResponse(kv, resp);
        innerObserver.next(resp);
      } else {
        // Unknow state -> error
        innerObserver.error('Service unavailable');
      }
    }, error => innerObserver.error(error),
      () => innerObserver.complete());

    return dataObservable;
  }

  protected filterResponse(kv: Object, resp) {
    let keys = Object.keys(kv || {});
    if (keys.length > 0 && resp.data && resp.data.length > 0) {
      for (let i = resp.data.length - 1; i >= 0; i--) {
        let deleteRecord = false;
        for (let k = 0, lenk = keys.length; k < lenk; k++) {
          if (resp.data[i][keys[k]] !== kv[keys[k]]) {
            deleteRecord = true;
            break;
          }
        }
        if (deleteRecord) {
          resp.data.splice(i, 1);
        }
      }
    }
  }

  advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object,
    offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    return undefined;
  }

  insert(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }

  update(kv: Object = {}, av: Object = {}, entity?: string,
    sqltypes?: Object): Observable<any> {
    return undefined;
  }

  delete(kv: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }


}

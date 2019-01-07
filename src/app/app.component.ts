import { HttpClient } from '@angular/common/http';
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { OntimizeMatIconRegistry } from 'ontimize-web-ngx';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-app]': 'true'
  }
})
export class AppComponent {

  public selectedVersion: any;
  public ontimizeVersions: any[];
  public dataArray: any[] = [];
  protected ontimizeMatIconRegistry: OntimizeMatIconRegistry;

  constructor(
    protected injector: Injector,
    protected httpClient: HttpClient
  ) {
    this.ontimizeMatIconRegistry = this.injector.get(OntimizeMatIconRegistry);
    this.ontimizeMatIconRegistry.addOntimizeSvgIcon('github', 'assets/images/github.svg');

    this.getVersions().then(() => this.getDemos());
  }

  getVersions(): Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      this.httpClient.get('./assets/data/versions.json').subscribe(
        (response: any[]) => {
          self.ontimizeVersions = response;
          self.selectedVersion = self.ontimizeVersions[0];
          resolve();
        },
        error => {
          console.log(error);
          reject();
        }
      )
    });
  }

  getDemos(): void {
    const self = this;
    this.httpClient.get('./assets/data/demos.json').subscribe(
      (response: any[]) => self.dataArray = response.filter((item: any) => item.version === self.selectedVersion.version),
      error => console.log(error)
    );
  }

  onVersionChanged(arg: any): void {
    this.selectedVersion = arg;
    this.getDemos();
  }

  openTab(url: string, e?: Event): void {
    if (e) {
      e.stopPropagation();
    }
    window.open(url, "_blank");
  }

}

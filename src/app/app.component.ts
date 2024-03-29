import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, Injector, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public selectedVersion: any;
  public ontimizeVersions: any[] = [];
  public dataArray: any[] = [];
  public color = 'primary'

  @HostBinding('class') get classes(): string {
    let className = 'o-app ';
    if (this.selectedVersion) {
      className += ('version' + this.selectedVersion.version);
      if (this.selectedVersion.version === 15) {
        this.color = '';
      }
    }
    return className;
  };

  constructor(
    protected injector: Injector,
    protected httpClient: HttpClient,
    protected domSanitizer: DomSanitizer,
    protected matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIconInNamespace('ontimize', 'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg'));

    this.getVersions().then(() => this.getDemos());
  }

  getVersions(): Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      this.httpClient.get('./assets/data/versions.json').subscribe(
        (response) => {
          if (response && Array.isArray(response)) {
            self.ontimizeVersions = response;
            self.selectedVersion = self.ontimizeVersions[0];
            resolve(true);
          }
          reject();
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
      (response) => {
        if (response && Array.isArray(response)) {
          self.dataArray = response.filter((item: any) => item.version === self.selectedVersion.version)
        }
      },
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

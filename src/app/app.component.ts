import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedVersion: any;
  public ontimizeVersions: any[] = [];
  public currentYear: number = new Date().getFullYear();

  constructor(
    protected injector: Injector,
    protected httpClient: HttpClient,
    protected domSanitizer: DomSanitizer,
    protected matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIconInNamespace('ontimize', 'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg'));
  }

  ngOnInit(): void {
    this.getVersions();
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
          } else {
            reject();
          }
        },
        error => {
          console.log(error);
          reject();
        }
      )
    });
  }

  onVersionChanged(version: any): void {
    this.selectedVersion = version;
  }

  openDocs() {
    window.open("https://ontimizeweb.github.io/docs/v" + this.selectedVersion.version);
  }

  openGitHub() {
    window.open("https://github.com/OntimizeWeb/ontimize-web-ngx");
  }

}

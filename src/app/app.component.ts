import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
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
export class AppComponent implements OnInit {

  public selectedVersion: any;
  public ontimizeVersions = [{
    title: '3.2.0',
    version: 3
  }, {
    title: '4.0.0-rc.0',
    version: 4
  }];
  public dataArray: any[] = [];
  protected ontimizeMatIconRegistry: OntimizeMatIconRegistry;

  constructor(
    protected injector: Injector,
    protected httpClient: HttpClient
  ) {
    this.ontimizeMatIconRegistry = this.injector.get(OntimizeMatIconRegistry);
    this.ontimizeMatIconRegistry.addOntimizeSvgIcon('github', 'assets/images/github.svg');

    this.selectedVersion = this.ontimizeVersions[0];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const self = this;
    this.httpClient.get('./assets/data/data.json').subscribe(
      (response: any[]) => self.dataArray = response.filter(item => item.version === self.selectedVersion.version),
      error => console.log(error)
    );
  }

  onVersionChanged(arg: any): void {
    this.selectedVersion = arg;
    this.getData();
  }

  openTab(url: string, e?: Event): void {
    if (e) {
      e.stopPropagation();
    }
    window.open(url, "_blank");
  }

}

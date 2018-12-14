import { Component, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { OGridComponent, OntimizeMatIconRegistry } from 'ontimize-web-ngx';

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

  ontimizeMatIconRegistry: OntimizeMatIconRegistry;

  selectedVersion: any;

  ontimizeVersions = [{
    title: '3.x.x',
    version: 3
  }, {
    title: '4.x.x',
    version: 4
  }];

  @ViewChild('grid')
  grid: OGridComponent;


  constructor(protected injector: Injector) {
    this.ontimizeMatIconRegistry = this.injector.get(OntimizeMatIconRegistry);
    this.ontimizeMatIconRegistry.addOntimizeSvgIcon('github', 'assets/images/github.svg');

    this.selectedVersion = this.ontimizeVersions[0];
  }

  ngAfterViewInit() {
    this.queryGrid();
  }

  queryGrid() {
    if (this.grid) {
      this.grid.queryData({
        version: this.selectedVersion.version
      });
    }
  }

  onVersionChanged(arg: any) {
    this.selectedVersion = arg;
    this.queryGrid();
  }

  openTab(url: string) {
    window.open(url, "_blank");
  }

  onGridItemClicked() {
    console.log("ola k ase");
  }

}

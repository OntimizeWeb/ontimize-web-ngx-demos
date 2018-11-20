import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home]': 'true'
  }
})
export class HomeComponent implements AfterViewInit {

  selectedVersion;

  ontimizeVersions = [{
    title: '3.x.x',
    version: 3
  }, {
    title: '4.x.x',
    version: 4
  }];

  @ViewChild('grid')
  grid: OGridComponent;

  constructor() {
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

  openTab(url) {
    window.open(url, "_blank");
  }

  onGridItemClicked(evt) {
    console.log("ola k ase");
  }
}

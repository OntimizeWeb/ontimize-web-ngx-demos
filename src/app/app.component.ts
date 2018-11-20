import { Component, OnInit, ViewChild, Inject, Injector } from '@angular/core';
import { OntimizeMatIconRegistry } from 'ontimize-web-ngx';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ontimizeMatIconRegistry: OntimizeMatIconRegistry;

  constructor(protected injector: Injector) {
    this.ontimizeMatIconRegistry = this.injector.get(OntimizeMatIconRegistry);
    this.ontimizeMatIconRegistry.addOntimizeSvgIcon('github', 'assets/images/github.svg');
  }


  ngOnInit() {
  }

}

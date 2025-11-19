
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SectionV15Component } from './section-v15/section-v15.component';
import { SectionV8Component } from './section-v8/section-v8.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OntimizeWebModule } from 'ontimize-web-ngx';
@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    OntimizeWebModule
  ],
  declarations: [
    CardComponent,
    SectionV15Component,
    SectionV8Component
  ],
  exports: [
    CardComponent,
    SectionV15Component,
    SectionV8Component,
    MatCardModule,
    MatIconModule,
    OntimizeWebModule
  ]
})
export class SharedModule { }

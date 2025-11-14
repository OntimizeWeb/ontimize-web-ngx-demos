
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
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
    SectionComponent
  ],
  exports: [
    CardComponent,
    SectionComponent,
    MatCardModule,
    MatIconModule,
    OntimizeWebModule
  ]
})
export class SharedModule { }

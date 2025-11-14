
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
@NgModule({
  declarations: [
    CardComponent,
    SectionComponent
  ],
  exports: [
    CardComponent,
    SectionComponent
  ]
})
export class SharedModule { }

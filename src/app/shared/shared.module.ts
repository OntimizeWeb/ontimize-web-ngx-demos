
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardV18Component } from './card-v18/card-v18.component';
import { SectionV15Component } from './section-v15/section-v15.component';
import { SectionV8Component } from './section-v8/section-v8.component';
import { SectionV18Component } from './section-v18/section-v18.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardV18Component,
    SectionV15Component,
    SectionV8Component,
    SectionV18Component
  ],
  exports: [
    CardComponent,
    CardV18Component,
    SectionV15Component,
    SectionV8Component,
    SectionV18Component,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

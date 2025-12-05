
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SectionV15Component } from './section-v15/section-v15.component';
import { SectionV8Component } from './section-v8/section-v8.component';
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
    SectionV15Component,
    SectionV8Component
  ],
  exports: [
    CardComponent,
    SectionV15Component,
    SectionV8Component,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

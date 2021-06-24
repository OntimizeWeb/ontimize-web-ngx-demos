
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }

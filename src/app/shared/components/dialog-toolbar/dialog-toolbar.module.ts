import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {DialogToolbarComponent} from './dialog-toolbar.component';



@NgModule({
  declarations: [
    DialogToolbarComponent
  ],
  exports: [
    DialogToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DialogToolbarModule { }

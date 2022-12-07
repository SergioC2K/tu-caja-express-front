import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePickerComponent} from './date-picker.component';
import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DatePickerModule { }

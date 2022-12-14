import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePickerComponent} from './date-picker.component';
import {MaterialModule} from '../../../material.module';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ]
})
export class DatePickerModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextAreaComponent} from './text-area.component';
import {MaterialModule} from '../../../material.module';


@NgModule({
  declarations: [TextAreaComponent],
  exports: [TextAreaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TextAreaModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogActionsComponent } from './dialog-actions.component';
import {MaterialModule} from '../../../material.module';
import {ButtonModule} from '../button/button.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [DialogActionsComponent],
  exports: [DialogActionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ButtonModule,
    FlexLayoutModule
  ]
})
export class DialogActionsModule { }

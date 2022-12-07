import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {ButtonActionsComponent} from './button-actions.component';
import {ButtonModule} from '../button/button.module';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ButtonActionsComponent],
  exports: [ButtonActionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ButtonModule,
    FlexModule
  ]
})
export class ButtonActionsModule { }

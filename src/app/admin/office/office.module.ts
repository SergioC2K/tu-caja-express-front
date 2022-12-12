import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from "./office.component";
import { OfficeDialogComponent } from './office-dialog/office-dialog.component';
import { ComponentsModule } from "../../shared";



@NgModule({
  declarations: [OfficeComponent, OfficeDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class OfficeModule { }

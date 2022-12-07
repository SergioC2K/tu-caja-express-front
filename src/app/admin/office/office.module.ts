import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from "./office.component";
import { ComponentsModule } from "../../shared";



@NgModule({
  declarations: [
    OfficeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class OfficeModule { }

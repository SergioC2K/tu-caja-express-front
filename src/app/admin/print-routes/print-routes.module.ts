import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "../../shared";
import { PrintRoutesComponent } from "./print-routes.component";



@NgModule({
  declarations: [PrintRoutesComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PrintRoutesModule { }

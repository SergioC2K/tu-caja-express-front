import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrintReportComponent } from "./print-report.component";
import { ComponentsModule } from "../../shared";
import { MaterialModule } from "../../material.module";


@NgModule({
  declarations: [
    PrintReportComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class PrintReportModule {
}

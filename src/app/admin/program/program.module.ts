import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgramComponent } from "./program.component";
import { ProgramDialogComponent } from "./program-dialog";
import { ComponentsModule } from "../../shared";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../material.module";


@NgModule({
  declarations: [ProgramComponent, ProgramDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class ProgramModule {
}

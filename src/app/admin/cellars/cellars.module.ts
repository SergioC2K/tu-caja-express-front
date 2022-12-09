import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CellarsComponent } from "./cellars.component";
import { ComponentsModule } from "../../shared";
import { MaterialModule } from "../../material.module";


@NgModule({
  declarations: [CellarsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class CellarsModule {
}

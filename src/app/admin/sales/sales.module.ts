import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SalesComponent } from "./sales.component";
import { ComponentsModule } from "../../shared";


@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SalesModule {
}

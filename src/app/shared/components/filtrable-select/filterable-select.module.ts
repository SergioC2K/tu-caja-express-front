import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterableSelectComponent } from "./filterable-select.component";
import { MaterialModule } from "../../../material.module";


@NgModule({
  declarations: [FilterableSelectComponent],
  exports: [FilterableSelectComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FilterableSelectModule {
}

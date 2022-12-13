import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterableSelectComponent } from "./filterable-select.component";
import { MaterialModule } from "../../../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [FilterableSelectComponent],
  exports: [FilterableSelectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FilterableSelectModule {
}

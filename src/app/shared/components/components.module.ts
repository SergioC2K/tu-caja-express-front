import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "./table/table.module";
import { ButtonModule } from "./button/button.module";
import { InputModule } from "./input/input.module";
import { DialogToolbarModule } from "./dialog-toolbar";
import { TextAreaModule } from "./text-area";
import { FlexModule } from "@angular/flex-layout";
import { ButtonActionsModule } from "./button-actions";
import { DatePickerModule } from "./date-picker";
import { DialogActionsModule } from "./dialog-actions";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


const allModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FlexModule,
  InputModule,
  TextAreaModule,
  TableModule,
  ButtonModule,
  ButtonModule,
  TableModule,
  DialogToolbarModule,
  TextAreaModule,
  ButtonActionsModule,
  DatePickerModule,
  DialogActionsModule
];

@NgModule({
  exports: [...allModules],
  imports: [...allModules]
})
export class ComponentsModule {
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../shared";
import { SurveysComponent } from "./surveys.component";


@NgModule({
  declarations: [SurveysComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SurveysModule {
}

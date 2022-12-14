import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../shared";
import { ServicesComponent } from "./services.component";


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ServicesModule {
}

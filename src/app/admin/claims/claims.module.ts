import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClaimsComponent } from "./claims.component";
import { ComponentsModule } from "../../shared";
import { MaterialModule } from "../../material.module";


@NgModule({
  declarations: [ClaimsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class ClaimsModule {
}

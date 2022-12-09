import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminProfileComponent } from "./admin-profile.component";
import { ComponentsModule } from "../../shared";


@NgModule({
  declarations: [
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AdminProfileModule {
}

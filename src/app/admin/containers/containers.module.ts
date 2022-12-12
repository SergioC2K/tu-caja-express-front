import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainersComponent } from "./containers.component";
import { ContainersDialogComponent } from "./containers-dialog";
import { ComponentsModule } from "../../shared";


@NgModule({
  declarations: [
    ContainersComponent,
    ContainersDialogComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ContainersModule {
}

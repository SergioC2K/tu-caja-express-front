import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgencyComponent } from "./agency.component";
import { AgencyDialogComponent } from "./agency-dialog";
import { ComponentsModule } from "../../shared";

@NgModule({
  declarations: [AgencyComponent, AgencyDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AgencyModule {
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { FlexModule } from "@angular/flex-layout";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../shared";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { CountriesModule } from "./countries";
import { AdminProfileModule } from "./admin-profile";
import { AgencyModule } from "./agency/agency.module";
import { ClientModule } from "./client/client.module";
import { ProgramModule } from "./program";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    CountriesModule,
    AdminProfileModule,
    AgencyModule,
    ClientModule,
    ProgramModule
  ]
})
export class AdminModule {
}

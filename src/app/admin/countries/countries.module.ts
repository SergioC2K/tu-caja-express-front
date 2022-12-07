import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivateCountriesComponent } from "./activate-countries";
import { EditCityComponent } from "./edit-city";
import { TransportationComponent } from "./transportation";
import { CountriesComponent } from "./countries.component";
import { MaterialModule } from "../../material.module";
import { ComponentsModule } from "../../shared";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CountriesComponent,
    ActivateCountriesComponent,
    EditCityComponent,
    TransportationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
  ]
})
export class CountriesModule {
}

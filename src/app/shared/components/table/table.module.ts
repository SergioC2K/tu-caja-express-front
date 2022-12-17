import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { AgGridModule } from "ag-grid-angular";
import { TableButtonComponent } from "./table-button/table-button.component";
import { AgencyTableComponent } from "./agency-table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ButtonModule } from "../button/button.module";
import { ProgramTableComponent } from "./program-table";
import { MaterialModule } from "../../../material.module";
import { ClientTableComponent } from "./client-table";
import { CountriesTableComponent } from "./countries-table";
import { OfficeTableComponent } from "./office-table";
import { ContainerTableComponent } from "./container-table";
import { SearchGuideTableComponent } from "./search-guide-table";
import { SalesTableComponent } from "./sales-table";
import { ServicesTableComponent } from "./services-table";
import { PrintRoutesTableComponent } from "./print-routes-table";
import { SurveysTableComponent } from "./surveys-table";
import { PackagesTableComponent } from "./packages-table";

const components: any[] | Type<any> = [
  TableComponent,
  TableButtonComponent,
  AgencyTableComponent,
  ProgramTableComponent,
  ClientTableComponent,
  CountriesTableComponent,
  OfficeTableComponent,
  ContainerTableComponent,
  SearchGuideTableComponent,
  SalesTableComponent,
  ServicesTableComponent,
  PrintRoutesTableComponent,
  SurveysTableComponent,
  SurveysTableComponent,
  PackagesTableComponent
];


@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    AgGridModule,
    FlexLayoutModule,
    ButtonModule,
    MaterialModule
  ]
})
export class TableModule {
}

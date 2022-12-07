import { Component, Input, OnInit } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-countries-table",
  templateUrl: "./countries-table.component.html",
  styleUrls: ["./countries-table.component.css"]
})
export class CountriesTableComponent extends TableComponent {

  @Input()
  public onlyTransportation: boolean = false;

  public override columnDefs: ColDef[] = [
    {
      field: "pais",
      headerName: "Pais"
    },
    {
      field: "estado",
      headerName: "Estado"
    },
    {
      field: "transporte",
      headerName: "Estado"
    }

  ];

  constructor() {
    super();
  }

}

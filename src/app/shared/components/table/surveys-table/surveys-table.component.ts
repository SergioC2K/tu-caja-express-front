import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-surveys-table",
  templateUrl: "./surveys-table.component.html",
  styleUrls: ["./surveys-table.component.css"]
})
export class SurveysTableComponent extends TableComponent {

  constructor() {
    super();
  }

  public override columnDefs: ColDef[] = [
    {
      field: "guia",
      headerName: "Guia"
    },
    {
      field: "evento",
      headerName: "Evento"
    },
    {
      field: "usuario",
      headerName: "Usuario"
    },
    {
      field: "creado",
      headerName: "Creado"
    }
  ];


}

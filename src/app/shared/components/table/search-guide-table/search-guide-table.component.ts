import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-search-guide-table",
  templateUrl: "./search-guide-table.component.html",
  styleUrls: ["./search-guide-table.component.css"]
})
export class SearchGuideTableComponent extends TableComponent {
  constructor() {
    super();
  }


  public override columnDefs: ColDef[] = [
    {
      field: "guia",
      headerName: "Guia"
    },
    {
      field: "pais",
      headerName: "Pais"
    },
    {
      field: "referencia",
      headerName: "Referencia #1"
    },
    {
      field: "referencia2",
      headerName: "Referencia #2"
    },
    {
      field: "fecha",
      headerName: "Fecha"
    },
    {
      field: "precio",
      headerName: "Precio"
    },
    {
      field: "lb",
      headerName: "Libra"
    },
    {
      field: "remitente",
      headerName: "Remitente"
    },
    {
      field: "estado",
      headerName: "Estado"
    }
  ];
}

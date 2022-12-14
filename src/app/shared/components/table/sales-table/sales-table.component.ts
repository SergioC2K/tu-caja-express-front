import { Component, OnInit } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";
import { TableButtonComponent } from "../table-button/table-button.component";

@Component({
  selector: "app-sales-table",
  templateUrl: "./sales-table.component.html",
  styleUrls: ["./sales-table.component.css"]
})
export class SalesTableComponent extends TableComponent {
  constructor() {
    super();
  }

  public override frameworkComponents: {} = {
    btnCellRenderer: TableButtonComponent
  };

  public override columnDefs: ColDef[] = [
    {
      field: "guia",
      headerName: "Guía"
    },
    {
      field: "evento",
      headerName: "Evento"
    },
    {
      field: "fechaEvento",
      headerName: "Fecha evento"
    },
    {
      field: "tipo",
      headerName: "Tipo"
    },
    {
      field: "fechaPago",
      headerName: "Fecha pago"
    },
    {
      field: "creado",
      headerName: "Creado"
    }
  ];
}

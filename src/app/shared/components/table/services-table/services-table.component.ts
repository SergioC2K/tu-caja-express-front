import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-services-table",
  templateUrl: "./services-table.component.html",
  styleUrls: ["./services-table.component.css"]
})
export class ServicesTableComponent extends TableComponent {

  constructor() {
    super();
  }

  public override columnDefs: ColDef[] = [
    {
      field: "guia",
      headerName: "Guia"
    },
    {
      field: "destinatario",
      headerName: "Destinatario"
    },
    {
      field: "fecha",
      headerName: "Fecha"
    },
    {
      field: "ultimoRecord",
      headerName: "Ultimo record"
    },
    {
      field: "",
      headerName: "Ver",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "remove_red_eye",
        message: "ver",
        selectRow: async (data: any) => {
          return data;
        }
      }
    }

  ];

}

import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";
import { TableButtonComponent } from "../table-button/table-button.component";

@Component({
  selector: "app-office-table",
  templateUrl: "./office-table.component.html",
  styleUrls: ["./office-table.component.css"]
})
export class OfficeTableComponent extends TableComponent {

  constructor() {
    super();
  }

  public override frameworkComponents: {} = {
    btnCellRenderer: TableButtonComponent
  };

  public override columnDefs: ColDef[] = [
    {
      field: "oficina",
      headerName: "Oficina"
    },
    {
      field: "",
      headerName: "Editar",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "edit",
        message: "Editar",
        selectRow: async (data: any) => {
          return data;
        }
      }
    },
    {
      field: "",
      headerName: "Asignar agencias",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "remove_red_eye",
        message: "Asignar agencias",
        selectRow: async (data: any) => {
          return data;
        }
      }
    },
    {
      field: "",
      headerName: "Asignar rutas",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "remove_red_eye",
        message: "Asignar rutas",
        selectRow: async (data: any) => {
          return data;
        }
      }
    },
    {
      field: "",
      headerName: "Mostrar",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "remove_red_eye",
        message: "Mostrar",
        selectRow: async (data: any) => {
          return data;
        }
      }
    }
  ];


}

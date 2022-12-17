import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-packages-table",
  templateUrl: "./packages-table.component.html",
  styleUrls: ["./packages-table.component.css"]
})
export class PackagesTableComponent extends TableComponent {
  constructor() {
    super();
  }

  public override columnDefs: ColDef[] = [
    {
      field: "code",
      headerName: "Codigo"
    },
    {
      field: "name",
      headerName: "Nombre"
    },
    {
      field: "color",
      headerName: "Color"
    },
    {
      field: "",
      headerName: "Editar",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "edit",
        selectRow: async (data: any) => {
          return data;
        }
      }
    },
    {
      field: "",
      headerName: "Ver",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "account_balance_wallet",
        selectRow: async (data: any) => {
          return data;
        }
      }
    },
    {
      field: "",
      headerName: "Impuesto avanzado",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "account_balance",
        selectRow: async (data: any) => {
          return data;
        }
      }
    }


  ];

}

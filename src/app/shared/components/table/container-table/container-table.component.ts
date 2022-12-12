import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";
import { TableButtonComponent } from "../table-button/table-button.component";

@Component({
  selector: "app-container-table",
  templateUrl: "./container-table.component.html",
  styleUrls: ["./container-table.component.css"]
})
export class ContainerTableComponent extends TableComponent {

  constructor() {
    super();
  }

  public override frameworkComponents: {} = {
    btnCellRenderer: TableButtonComponent
  };

  public override columnDefs: ColDef[] = [
    {
      field: "containerName",
      headerName: "N° Contenedor"
    },
    {
      field: "guide",
      headerName: "Guias"
    },
    {
      field: "created",
      headerName: "Creado"
    },
    {
      field: "shippingCompany",
      headerName: "Naviera"
    },
    {
      field: "description",
      headerName: "Descripción"
    },
    {
      field: "state",
      headerName: "Estado"
    },
    {
      field: "",
      headerName: "Abrir",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "remove_red_eye",
        message: "Abrir contenedor",
        selectRow: async (data: any) => {
          return data;
        }
      }
    },
    {
      field: "",
      headerName: "Editar",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        icon: "edit",
        message: "Editar contenedor",
        selectRow: async (data: any) => {
          return data;
        }
      }
    }

  ];

}

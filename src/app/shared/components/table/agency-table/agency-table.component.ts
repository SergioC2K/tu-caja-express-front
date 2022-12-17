import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";
import { TableButtonComponent } from "../table-button/table-button.component";

@Component({
  selector: "app-agency-table",
  templateUrl: "./agency-table.component.html",
  styleUrls: ["./agency-table.component.css"]
})
export class AgencyTableComponent extends TableComponent {

  constructor() {
    super();
  }

  public override frameworkComponents: {} = {
    btnCellRenderer: TableButtonComponent
  };

  public override columnDefs: ColDef[] = [
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
      field: "agencyName",
      headerName: "Agencia"
    },
    {
      field: "address",
      headerName: "Direcci\u00F3n"
    },
    {
      field: "telephone1",
      headerName: "Tel\u00E9fono"
    },
    {
      field: "webPage",
      headerName: "P\u00E1gina Web"
    }
  ];

}

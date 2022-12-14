import { Component } from "@angular/core";
import { TableComponent } from "../table.component";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-print-routes-table",
  templateUrl: "./print-routes-table.component.html",
  styleUrls: ["./print-routes-table.component.css"]
})
export class PrintRoutesTableComponent extends TableComponent {

  constructor() {
    super();
  }

  public override columnDefs: ColDef[] = [
    {
      field: "guia",
      headerName: "Guía"
    },
    {
      field: "usuario",
      headerName: "Usuario"
    },
    {
      field: "Remitente",
      headerName: "Telefono"
    },
    {
      field: "direccion",
      headerName: "Dirección"
    },
    {
      field: "ruta",
      headerName: "Ruta"
    },
    {
      field: "tipo",
      headerName: "Tipo"
    },
    {
      field: "caja",
      headerName: "Caja"
    },
    {
      field: "creado",
      headerName: "Creada"
    },
    {
      field: "recoger",
      headerName: "Recoger"
    },
    {
      field: "entregar",
      headerName: "Entregar"
    },
    {
      field: "pago",
      headerName: "Pago"
    },
    {
      field: "nota",
      headerName: "Nota"
    }
  ];

}

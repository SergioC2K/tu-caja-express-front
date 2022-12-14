import { Component, Input } from "@angular/core";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {

  public defaultColumnDefs: ColDef = {
    sortable: true,
    resizable: true,
    filter: true
  };

  @Input()
  public columnDefs: ColDef[] = [];

  @Input()
  public defaultColDef: any;

  @Input()
  public data: any[] = [];

  @Input()
  public rowSelection: any = "single";

  @Input()
  frameworkComponents: any = {};


  constructor() {
  }

  public onGridReady($event: GridReadyEvent<any>) {

  }

  public onCellClicked($event: CellClickedEvent<any>) {

  }
}

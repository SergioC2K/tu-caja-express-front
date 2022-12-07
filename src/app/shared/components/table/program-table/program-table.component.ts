import {Component, Input, OnInit} from '@angular/core';
import {ColDef} from 'ag-grid-community';

@Component({
  selector: 'app-program-table',
  templateUrl: './program-table.component.html',
})
export class ProgramTableComponent implements OnInit {

  @Input()
  public data: any[] = [];

  public columnDefs: ColDef[] = [
    {
      field: 'cliente',
      headerName: 'Cliente'
    },
    {
      field: 'recolectar',
      headerName: 'Recolectar'
    },
    {
      field: 'age',
      headerName: ''
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

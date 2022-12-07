import {Component} from '@angular/core';
import {ColDef} from 'ag-grid-community';
import {TableButtonComponent} from '../table-button/table-button.component';

@Component({
  selector: 'app-agency-table',
  templateUrl: './agency-table.component.html',
  styleUrls: ['./agency-table.component.css']
})
export class AgencyTableComponent {

  constructor() {
  }

  public frameworkComponents: {} = {
    btnCellRenderer: TableButtonComponent,
  };

  public columnDefs: ColDef[] = [
    {
      field: 'agencia',
      headerName: 'Agencia'
    },
    {
      field: '',
      headerName: '',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        icon: 'edit',
        message: 'Editar',
        title: 'Editar información',
        selectRow: async (data: any) => {
          return data
        }
      },
    },
    {
      field: '',
      headerName: '',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        icon: 'edit',
        message: 'Editar tarifa',
        title: 'Editar tarifa',
        selectRow: async (data: any) => {
          return data
        }
      },
    },
    {
      field: '',
      headerName: '',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        icon: 'edit',
        message: 'Modificar usuario',
        title: 'Modificar usuario',
        selectRow: async (data: any) => {
          return data
        }
      },
    },
    {
      field: '',
      headerName: '',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        icon: 'edit',
        message: 'clonar agencia',
        title: 'Clonar',
        selectRow: async (data: any) => {
          return data
        }
      },
    },

  ]
  data = [{
    agencia: '2'
  }];

  createAgency() {

  }
}

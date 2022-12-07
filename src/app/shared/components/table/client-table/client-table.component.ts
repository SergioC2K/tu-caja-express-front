import {Component} from '@angular/core';
import {TableButtonComponent} from '../table-button/table-button.component';
import {ColDef} from 'ag-grid-community';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent {


  public frameworkComponents: {} = {
    btnCellRenderer: TableButtonComponent,
  };

  public columnDefs: ColDef[] = [
    {
      field: 'nombre',
      headerName: 'Nombre'
    },
    {
      field: 'estado',
      headerName: 'Estado'
    },
    {
      field: 'pais',
      headerName: 'Pais'
    },
    {
      field: 'ciudad',
      headerName: 'Ciudad'
    },
    {
      field: 'tipo',
      headerName: 'Tipo'
    },
    {
      field: '',
      headerName: 'Historia',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        icon: 'remove_red_eye',
        message: 'Ver historia',
        selectRow: async (data: any) => {
          return data
        }
      },
    },

  ]
  data =
    [{
      'nombre': 'Tallou',
      'pais': 'Latvia',
      'ciudad': 'Vangaži',
      'tipo': 'Baglietto\'a Dotted Lichen'
    }, {
      'nombre': 'Edgard',
      'pais': 'Sweden',
      'ciudad': 'Lidingö',
      'tipo': 'Gander\'s Buckhorn Cholla'
    }, {
      'nombre': 'Tye',
      'pais': 'United States',
      'ciudad': 'Detroit',
      'tipo': 'Urera'
    }, {
      'nombre': 'Lauritz',
      'pais': 'United States',
      'ciudad': 'Amarillo',
      'tipo': 'Orange Lichen'
    }, {
      'nombre': 'Kerwin',
      'pais': 'Colombia',
      'ciudad': 'Palermo',
      'tipo': 'Calamus'
    }, {
      'nombre': 'La verne',
      'pais': 'Brazil',
      'ciudad': 'Feira de Santana',
      'tipo': 'Smooth Hawksbeard'
    }, {
      'nombre': 'Matias',
      'pais': 'Indonesia',
      'ciudad': 'Sambongmulyo',
      'tipo': 'Poisonbean'
    }, {
      'nombre': 'Torrey',
      'pais': 'China',
      'ciudad': 'Baixi',
      'tipo': 'Mamani'
    }, {
      'nombre': 'Lenci',
      'pais': 'China',
      'ciudad': 'Beixin',
      'tipo': 'Julella Lichen'
    }, {
      'nombre': 'Bernadine',
      'pais': 'Russia',
      'ciudad': 'Spas-Zaulok',
      'tipo': 'Tetracarpidium'
    }]


  createAgency() {

  }

}

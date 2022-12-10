import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-button',
  template: `
    <button id="table-button" mat-raised-button>
      <mat-icon matTooltipClass="tooltip-icon" matTooltip="{{message}}"
                (click)="selectRow()">{{tableIcon}}</mat-icon>
      {{title}}
    </button>
  `,
  styles: [
    `
      #table-button {
        line-height: 20px !important;
        font-size: 12px;
        background-color: black;
        color: white;
      }

      #table-button mat-icon {
        font-size: 18px;
        width: 20px;
        height: 20px;
      }

    `

  ],
  encapsulation: ViewEncapsulation.None
})
export class TableButtonComponent implements ICellRendererAngularComp {

  private params!: ICellRendererParams | any;
  public message: string = '';
  public tableIcon: string = '';
  public title: string = '';

  agInit(params: ICellRendererParams | any): void {
    this.params = params;
    this.tableIcon = this.params.icon;
    this.message = this.params.message;
    this.title = this.params.title;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  public selectRow() {

  }
}

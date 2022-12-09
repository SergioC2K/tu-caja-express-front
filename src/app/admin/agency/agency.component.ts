import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AgencyDialogComponent} from './agency-dialog';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public createAgency(): void {
    const dialogRef = this.dialog.open(AgencyDialogComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
    })
  }

  public deleteAgencies() {

  }
}

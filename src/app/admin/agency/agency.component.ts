import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { AgencyDialogComponent } from './agency-dialog';
import { AgenciesService, IResAgencies, IAgency } from "../../shared";

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agencyList: Array<IAgency> = [];

  constructor(private dialog: MatDialog,
    private agenciesService: AgenciesService) {
  }

  ngOnInit(): void {
    this.selectAgencies();
  }

  public selectAgencies(): any {
    this.agenciesService.searchAgency(0, 10, 'agencyName', 'ASC').subscribe(
      (iResAgencies: IResAgencies) => {
        this.agencyList = [];
        for (let iAgency of iResAgencies.data.content) {
          this.agencyList.push(iAgency);
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error) {
          console.log(err);
        }
      }
    );
  }
  
  public createAgency(): void {
    const dialogRef = this.dialog.open(AgencyDialogComponent, {
      width: '900px',
      height: 'auto',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.agencyList = [...this.agencyList, value];
      }
    });
  }

  public deleteAgencies(): void {
    console.log('holiiiiiiiiiiiii');
  }

}

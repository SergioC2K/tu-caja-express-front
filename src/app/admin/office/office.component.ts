import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { OfficeDialogComponent } from "./office-dialog";

@Component({
  selector: "app-office",
  templateUrl: "./office.component.html",
  styleUrls: ["./office.component.css"]
})
export class OfficeComponent implements OnInit {

  officeList: any[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public saveOffice(): void {

  }

  public createOffice(): void {
    const dialogRef = this.dialog.open(OfficeDialogComponent, {
      width: "500px",
      height: "auto",
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.officeList = [...this.officeList, value];
      }
    });
  }
}

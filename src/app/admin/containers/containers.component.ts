import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ContainersDialogComponent } from "./containers-dialog";

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.css"]
})
export class ContainersComponent implements OnInit {
  public containerList: any[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openContainerDialog(): void {
    const dialogRef = this.dialog.open(ContainersDialogComponent, {
      width: "400px",
      height: "auto",
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.containerList = [...this.containerList, value];
      }
    });


  }
}

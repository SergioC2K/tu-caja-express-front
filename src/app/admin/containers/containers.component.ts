import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ContainersDialogComponent } from "./containers-dialog";
import { UnsubscribeOnDestroyDirective } from "../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.css"]
})
export class ContainersComponent extends UnsubscribeOnDestroyDirective implements OnInit {
  public containerList: any[] = [];

  constructor(formBuilder: FormBuilder, private dialog: MatDialog) {
    super(formBuilder, formBuilder.group({
      tipo: [null],
      paises: [null],
      nContenedor: [null]
    }));
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

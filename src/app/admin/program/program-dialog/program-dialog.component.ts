import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { SweetAlertService } from "../../../shared";

@Component({
  selector: "app-program-dialog",
  templateUrl: "./program-dialog.component.html",
  styleUrls: ["./program-dialog.component.css"]
})
export class ProgramDialogComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProgramDialogComponent>,
    private sweetAlertService: SweetAlertService) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
  }

  public async closeDialog(): Promise<void> {
    const { isConfirmed } = await this.sweetAlertService.showConfirmMessage("Esta seguro");
    if (isConfirmed) {
      this.dialogRef.close();
    }

  }

}

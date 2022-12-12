import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyDirective } from "../../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { SweetAlertService } from "../../../shared";

@Component({
  selector: "app-office-dialog",
  templateUrl: "./office-dialog.component.html",
  styleUrls: ["./office-dialog.component.css"]
})
export class OfficeDialogComponent extends UnsubscribeOnDestroyDirective {

  constructor(
    formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<MatDialogRef<OfficeDialogComponent>>,
    private sweetAlertService: SweetAlertService) {
    super(formBuilder, formBuilder.group({
      officeName: [null, [Validators.required]],
      leadAgency: [null, [Validators.required]],
      routes: [null, [Validators.required]]
    }));
  }

  public closeDialog() {
    this.matDialogRef.close();
  }

  public async saveOffice() {
    const rawValue = this.form.getRawValue();
    if (this.form.invalid) {
      await this.sweetAlertService.showErrorMessage("Campos obligatorios");
      return;
    }
    const { isConfirmed } = await this.sweetAlertService.showSuccessMessage("Creado con exito");
    if (isConfirmed) {
      this.matDialogRef.close(rawValue);
    }
  }
}

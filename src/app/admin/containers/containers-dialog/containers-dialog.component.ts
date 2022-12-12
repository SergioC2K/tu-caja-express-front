import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { UnsubscribeOnDestroyDirective } from "../../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder, Validators } from "@angular/forms";
import { SweetAlertService } from "../../../shared";

@Component({
  selector: "app-containers-dialog",
  templateUrl: "./containers-dialog.component.html",
  styleUrls: ["./containers-dialog.component.css"]
})
export class ContainersDialogComponent extends UnsubscribeOnDestroyDirective {

  constructor(
    formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ContainersDialogComponent>,
    private sweetAlertService: SweetAlertService
  ) {
    super(formBuilder, formBuilder.group({
      containerName: [null, [Validators.required]],
      shippingCompany: [null, [Validators.required]]
    }));
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async createContainer() {
    const rawValue = this.form.getRawValue();
    if (this.form.invalid) {
      await this.sweetAlertService.showErrorMessage("Campos obligatorios");
      return;
    }

    const { isConfirmed } = await this.sweetAlertService.showSuccessMessage("Creado con exito");
    if (isConfirmed) {
      this.dialogRef.close(rawValue);
    }
  }
}

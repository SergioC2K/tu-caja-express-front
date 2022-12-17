import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroyDirective } from '../../../shared/directives/unsubscribe-on-destroy.directive';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SweetAlertService } from '../../../shared';

@Component({
  selector: 'app-agency-dialog',
  templateUrl: './agency-dialog.component.html',
  styleUrls: ['./agency-dialog.component.css']
})
export class AgencyDialogComponent extends UnsubscribeOnDestroyDirective {

  constructor(
    formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<MatDialogRef<AgencyDialogComponent>>,
    private sweetAlertService: SweetAlertService) {
    super(formBuilder, formBuilder.group({
      agencyName: [null, [Validators.required]],
      leadAgency: [null, [Validators.required]],
      routes: [null, [Validators.required]]
    }));
  }

  public closeDialog() {
    this.matDialogRef.close();
  }

  public async saveAgency() {
    const rawValue = this.form.getRawValue();
    if (this.form.invalid) {
      await this.sweetAlertService.showErrorMessage('Campos obligatorios');
      return;
    }
    const { isConfirmed } = await this.sweetAlertService.showSuccessMessage('Creado con exito');
    if (isConfirmed) {
      this.matDialogRef.close(rawValue);
    }
  }
}

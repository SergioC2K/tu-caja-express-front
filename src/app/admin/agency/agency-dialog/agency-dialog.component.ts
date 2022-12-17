import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroyDirective } from '../../../shared/directives/unsubscribe-on-destroy.directive';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SweetAlertService, AgenciesService, IAgencySave } from '../../../shared';

@Component({
  selector: 'app-agency-dialog',
  templateUrl: './agency-dialog.component.html',
  styleUrls: ['./agency-dialog.component.css']
})
export class AgencyDialogComponent extends UnsubscribeOnDestroyDirective {

  constructor(
    formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<MatDialogRef<AgencyDialogComponent>>,
    private sweetAlertService: SweetAlertService,
    private agenciesService: AgenciesService) {
    super(formBuilder, formBuilder.group({
      agencyName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      telephone1: [null, [Validators.required]],
      telephone2: [''],
      code: [null, [Validators.required]],
      fax: [''],
      mail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      webPage: [''],
      zipCode: [''],
      principalAgency: [0],
      user: [''],
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
    } else {

      let iAgencySave: IAgencySave = {
        agencyName: this.form.value.agencyName,
        code: this.form.value.code,
        address: this.form.value.address,
        municipalityId: 1,
        zipCode: this.form.value.zipCode,
        telephone1: this.form.value.telephone1,
        telephone2: this.form.value.telephone2,
        fax: this.form.value.fax,
        mail: this.form.value.mail,
        webPage: this.form.value.webPage,
        weightForm: 'Ambos',
        logoUrl: '',
        status: true,
        principalAgency: this.form.value.principalAgency,
        user: this.form.value.mail
      };

      this.agenciesService.saveAgency(iAgencySave).subscribe(
        (resp) => {
          this.sweetAlertService.showSuccessMessage('Creado con exito');
          this.matDialogRef.close(rawValue);
        },
        (err: any) => {
          this.sweetAlertService.showErrorMessage('Error inesperado');
        }
      );
    }

  }
}

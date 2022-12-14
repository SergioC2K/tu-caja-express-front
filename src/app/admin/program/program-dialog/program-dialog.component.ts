import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { SweetAlertService } from "../../../shared";
import { UnsubscribeOnDestroyDirective } from "../../../shared/directives/unsubscribe-on-destroy.directive";

@Component({
  selector: "app-program-dialog",
  templateUrl: "./program-dialog.component.html",
  styleUrls: ["./program-dialog.component.css"]
})
export class ProgramDialogComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(
    formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProgramDialogComponent>,
    private sweetAlertService: SweetAlertService) {
    super(formBuilder, formBuilder.group({
      telefono: [null],
      movil: [null],
      nombre: [null],
      direccion: [null],
      ciudad: [null],
      barrio: [null],
      email: [null],
      zip: [null],
      fechaRecolecta: [null],
      npaquetes: [null],
      iguales: [null],
      contenido: [null],
      declarado: [null],
      peso: [null],
      alto: [null],
      ancho: [null],
      largo: [null],
      notas: [null]
    }));
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

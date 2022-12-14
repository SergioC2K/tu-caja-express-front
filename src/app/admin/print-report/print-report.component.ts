import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UnsubscribeOnDestroyDirective } from "../../shared";

@Component({
  selector: "app-print-report",
  templateUrl: "./print-report.component.html",
  styleUrls: ["./print-report.component.css"]
})
export class PrintReportComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      tipoInforme: [null],
      agencia: [null],
      usuario: [null],
      tipoCaja: [null],
      tipoEnvio: [null],
      pais: [null],
      tipoPago: [null],
      imprimir: [null],
      orden: [null],
      ruta: [null],
      libraMin: [null],
      fechaInicio: [null],
      fechaFinal: [null],
      alertaInicio: [null],
      alertaFinal: [null],
    }));
  }

  ngOnInit(): void {
  }

}

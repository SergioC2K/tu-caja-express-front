import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyDirective } from "../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-search-guide",
  templateUrl: "./search-guide.component.html",
  styleUrls: ["./search-guide.component.css"]
})
export class SearchGuideComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      agencia: [null, [Validators.required]],
      ciudad: [null, [Validators.required]],
      guiaDesde: [null, [Validators.required]],
      guiaHasta: [null, [Validators.required]],
      numeroGuia: [null, [Validators.required]],
      referencia: [null, [Validators.required]],
      referencia2: [null, [Validators.required]],
      proceso: [null, [Validators.required]],
      numeroMovimiento: [null, [Validators.required]],
      paisDestino: [null, [Validators.required]],
      estadoDestino: [null, [Validators.required]],
      CiudadDestino: [null, [Validators.required]],
      PesoDesde: [null, [Validators.required]],
      PesoHasta: [null, [Validators.required]],
      pago: [null, [Validators.required]],
      orden: [null, [Validators.required]],
      nombreRemitente: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      nombreDestinatario: [null, [Validators.required]],
      telefonoDestinatario: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      fechaInicial: [null, [Validators.required]],
      fechaFinal: [null, [Validators.required]]


    }));
  }

  ngOnInit(): void {
  }

}

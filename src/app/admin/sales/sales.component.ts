import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyDirective } from "../../shared";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.css"]
})
export class SalesComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      usuario: [null],
      fechaDesde: [null],
      fechaHasta: [null],
      ventasPagos: [null],
    }));
  }

  ngOnInit(): void {
  }

}

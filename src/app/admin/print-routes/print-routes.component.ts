import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UnsubscribeOnDestroyDirective } from "../../shared";

@Component({
  selector: "app-print-routes",
  templateUrl: "./print-routes.component.html",
  styleUrls: ["./print-routes.component.css"]
})
export class PrintRoutesComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      fechaInicio: [null],
      fechaFinal: [null],
      rutas: [null]
    }));
  }

  ngOnInit(): void {
  }

}

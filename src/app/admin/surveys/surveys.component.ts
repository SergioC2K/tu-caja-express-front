import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UnsubscribeOnDestroyDirective } from "../../shared";

@Component({
  selector: "app-surveys",
  templateUrl: "./surveys.component.html",
  styleUrls: ["./surveys.component.css"]
})
export class SurveysComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      usuario: [null],
      fechaDesde: [null],
      fechaHasta: [null],
      encuesta: [null],
    }));
  }

  ngOnInit(): void {
  }

}

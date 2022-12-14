import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UnsubscribeOnDestroyDirective } from "../../shared";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      nombre: [null],
      numeroGuia: [null],
    }));
  }

  ngOnInit(): void {
  }

}

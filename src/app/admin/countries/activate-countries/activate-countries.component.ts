import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyDirective } from "../../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-activate-countries",
  templateUrl: "./activate-countries.component.html",
  styleUrls: ["./activate-countries.component.css"]
})
export class ActivateCountriesComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({}));
  }

  ngOnInit(): void {
  }

  public saveCountries(): void {

  }

}

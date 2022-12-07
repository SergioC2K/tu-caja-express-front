import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyDirective } from "../../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-city",
  templateUrl: "./edit-city.component.html",
  styleUrls: ["./edit-city.component.css"]
})
export class EditCityComponent extends UnsubscribeOnDestroyDirective implements OnInit {
  formGro!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({}));
  }

  ngOnInit(): void {
  }

  public saveCity(): void {

  }
}

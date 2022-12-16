import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyDirective } from "../../shared";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent extends UnsubscribeOnDestroyDirective implements OnInit {


  constructor(formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      nombre: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      movil: [null, [Validators.required]],
      mensaje: [null, [Validators.required]]
    }));
  }

  ngOnInit(): void {
  }

}

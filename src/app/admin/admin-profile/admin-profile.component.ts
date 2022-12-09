import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared";
import { UnsubscribeOnDestroyDirective } from "../../shared/directives/unsubscribe-on-destroy.directive";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-admin-profile",
  templateUrl: "./admin-profile.component.html",
  styleUrls: ["./admin-profile.component.css"]
})
export class AdminProfileComponent extends UnsubscribeOnDestroyDirective implements OnInit {

  constructor(private authService: AuthService, formBuilder: FormBuilder) {
    super(formBuilder, formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null],
      newPassword: [null],
      repeatPassword: [null]
    }));
  }

  ngOnInit(): void {
    this.setValues();
  }

  public setValues(): void {
    const userInfo = this.authService.getUserInfo();
    this.form.patchValue({ ...userInfo });
  }

}

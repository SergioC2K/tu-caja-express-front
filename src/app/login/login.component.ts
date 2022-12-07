import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService, ICreateUserRequest, SweetAlertService } from "../shared";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  isAdmin: boolean = true;
  onCreate: boolean = false;

  public form!: FormGroup;
  public userForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sweetAlertService: SweetAlertService) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.validateRoute();
  }

  private validateRoute() {
    const currentUrl = this.router.url.replace(/\\|\//g, "");
    const ADMIN_LOGIN = "admin-login";
    this.isAdmin = currentUrl === ADMIN_LOGIN;
  }

  public async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    try {
      const response = await this.authService.loginUser(this.form.getRawValue()).toPromise();
    } catch (e) {
      await this.sweetAlertService.showErrorMessage("Error en el servidor");
    }

  }


  public async onCreateUser() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) return;
    try {
      const request: ICreateUserRequest = { ...this.userForm.getRawValue(), role: ["user"] };
      const response = await this.authService.createUser(request).toPromise();
    } catch (e) {
      await this.sweetAlertService.showErrorMessage("Error en el servidor");
    }
  }

  public setOnCreate() {
    this.onCreate = !this.onCreate;
  }
}

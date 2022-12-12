import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService, ICreateUserRequest, SweetAlertService, UserService } from "../shared";

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
    private sweetAlertService: SweetAlertService,
    private userService: UserService) {
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

  async ngOnInit(): Promise<void> {
    this.validateRoute();
  }

  private validateRoute() {
    const currentUrl = this.router.url.replace(/\\|\//g, "");
    const ADMIN_LOGIN = "admin-login";
    this.isAdmin = currentUrl === ADMIN_LOGIN;
  }

  public async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      await this.sweetAlertService.showErrorMessage("Campos obligatorios");
      return;
    }

    const user = {
      "id": 1,
      "firstName": "Tu caja",
      "lastName": "Express",
      "email": "info@tucajexpress.com",
      "password": "123456",
      "roles": [{ "id": 3, "name": "ROLE_USER" }],
      "locked": false,
      "enabled": false
    };
    const rawValue = this.form.getRawValue();
    if (rawValue.password === user.password) {
      this.authService.setUserInfo(user);
      await this.router.navigate(["/admin"]);
    } else {
      await this.sweetAlertService.showErrorMessage("Usuario invalido");
      return;
    }


    // try {
    //   this.form.disable();
    //   this.loading = true;
    //   const response = await this.authService.loginUser(this.form.getRawValue()).toPromise();
    //   if (response?.status === 200) {
    //     this.authService.setToken(response.data.token);
    //     const userResponse = await this.userService.getUserInfo(response.data.id);
    //     this.authService.setUserInfo(userResponse?.data);
    //     await this.router.navigate(["/admin"]);
    //   }
    //   this.form.enable();
    //   this.loading = false;
    // } catch (e) {
    //   this.form.enable();
    //   this.loading = false;
    //   // @ts-ignore
    //   await this.sweetAlertService.showErrorMessage(e.message);
    // }
  }


  public async onCreateUser() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) return;
    try {
      this.loading = true;
      this.form.disable();
      const request: ICreateUserRequest = { ...this.userForm.getRawValue(), role: ["user"] };
      const response = await this.authService.createUser(request).toPromise();
      if (response?.status === 201) {
        const { isConfirmed } = await this.sweetAlertService.showSuccessMessage("Usuario creado con exito");
        if (isConfirmed) {
          this.form.patchValue({
            username: response.data.email,
            password: request.password
          });
          await this.onSubmit();
          this.form.enable();
          this.loading = false;
        }
      }
    } catch (e) {
      this.form.enable();
      this.loading = false;
      // @ts-ignore
      await this.sweetAlertService.showErrorMessage(e.message);
    }
  }

  public setOnCreate() {
    this.onCreate = !this.onCreate;
  }
}

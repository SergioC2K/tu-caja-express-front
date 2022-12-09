import { Component } from "@angular/core";
import { AuthService, SweetAlertService } from "../../shared";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  user: string = "";

  constructor(private authService: AuthService, private sweetAlertService: SweetAlertService, private router: Router) {
    this.getUserName();
  }

  public async logout(): Promise<void> {
    const { isConfirmed } = await this.sweetAlertService.showConfirmMessage("Desea cerrar sesión?");
    if (isConfirmed) {
      this.authService.deleteToken();
      await this.router.navigate(["/home"]);
    }
  }

  private getUserName(): void {
    this.user = this.authService.getUserInfo().firstName;
  }


}

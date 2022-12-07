import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})
export class SweetAlertService {

  constructor() {
  }

  public async showErrorMessage(message: string) {
    return await Swal.fire({
      title: "Error",
      text: message + ".",
      icon: "error",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ea4235"
    });
  }

  public async showSuccessMessage(message: string) {
    return await Swal.fire({
      title: message,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ea4235"
    });
  }

  public async showInfoMessage(message: string) {
    return await Swal.fire({
      title: message,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ea4235"
    });
  }

  public async showConfirmMessage(message: string) {
    return await Swal.fire({
      title: message,
      icon: "question",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ea4235",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#1d1d1b"
    });
  }
}

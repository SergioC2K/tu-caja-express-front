import { ErrorStateMatcher } from "@angular/material/core";
import { FormControl, FormGroupDirective, NgControl, NgForm } from "@angular/forms";

export class CustomErrorStateMatcher implements ErrorStateMatcher {

  constructor(public controlName: NgControl) {
  }


  isErrorState(control: FormControl, form: FormGroupDirective | NgForm | null): boolean {
    return !!(this.controlName && this.controlName.invalid && (this.controlName.touched || this.controlName.dirty)) as boolean;
  }
}

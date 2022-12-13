import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { CustomErrorStateMatcher } from "./custom-error-state-matcher";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements ControlValueAccessor {


  public value: any;

  public onChange = (fn: any) => {
  };
  public onTouched = () => {
  };

  onInput(value: string) {
    this.value = value;
    this.onTouched();
    this.onChange(this.value);
  }

  @Input()
  public appearance: any = "outline";

  @Input()
  public type: string = "text";

  @Input()
  public icon: string = "";

  @Input()
  public disabled: boolean = false;

  @Input()
  public placeholder: string = "";

  @Input()
  public readonly: boolean = false;

  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public errorStateMatcher: ErrorStateMatcher = new CustomErrorStateMatcher(this.ngControl);

  public getErrorMessage(): string | null {
    let errorMessage: string | null = null;
    if (this.ngControl.hasError("required")) {
      errorMessage = "El campo es obligatorio";
    }
    if (this.ngControl.hasError("email")) {
      errorMessage = "El email no es valido";
    }
    if (this.ngControl.hasError("minlength")) {
      errorMessage = `La longitud minima es ${this.ngControl.errors?.["minlength"]?.requiredLength} caracteres`;
    }
    if (this.ngControl.hasError("maxlength")) {
      errorMessage = `La longitud maxima es ${this.ngControl.errors?.["maxlength"]?.requiredLength} caracteres`;
    }

    return errorMessage;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onBlur($event: FocusEvent) {
    // console.log('onBlur control.errors: ', this.ngControl.control?.errors);
  }
}

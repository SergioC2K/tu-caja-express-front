import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, NgForm } from "@angular/forms";
import { FormControl, Validators } from "@angular/forms";
import { CustomErrorStateMatcher } from "./custom-error-state-matcher";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  counter: number = 0;

  public value!: string;

  public onChange = (_: any) => {
  };
  public onTouch = () => {
  };

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  @Input()
  public type: string = "text";

  @Input()
  public appearance: any = "outline";

  @Input()
  public placeholder: string = "";

  @Input()
  public readonly: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Input()
  public icon: string = "";

  constructor() {
  }


  // public getErrorMessage(): string {
  //   return this.control.hasError("required") ? "Campo obligatorio" : "";
  // }

  writeValue(value: any): void {
    if (value) {
      this.value = value || "";
    } else {
      this.value = "";
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}

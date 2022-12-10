import { Component, forwardRef, Input, Self } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, NgForm } from "@angular/forms";


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

  // constructor(@Self() public ngControl: NgControl) {
  //   this.ngControl.valueAccessor = this;
  // }
  constructor() {
  }


  // public getErrorMessage(): string {
  //   return this.control.hasError("required") ? "Campo obligatorio" : "";
  // }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // setDisabledState(isDisabled: boolean) {
  //   this.disabled = isDisabled;
  // }

  onBlur($event: FocusEvent) {
    // console.log('onBlur control.errors: ', this.ngControl.control?.errors);
  }
}

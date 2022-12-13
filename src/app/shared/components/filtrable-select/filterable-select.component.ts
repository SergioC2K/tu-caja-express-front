import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "app-filterable-select",
  templateUrl: "./filterable-select.component.html",
  styleUrls: ["./filterable-select.component.css"]
})
export class FilterableSelectComponent implements ControlValueAccessor {

  public value!: any;

  public onChange = (fn: any) => {
  };
  public onTouched = () => {
  };
  public options: string[] = [];

  onInput(value: string) {
    this.value = value;
    this.onTouched();
    this.onChange(this.value);
  }
  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
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
}

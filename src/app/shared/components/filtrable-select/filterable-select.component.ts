import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

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

  constructor() {
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
